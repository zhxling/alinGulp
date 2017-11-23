import angular from 'angular';

const [_identity, _authenticated] = [Symbol(''), Symbol('')];
class identityService {
  constructor($q, $http, $timeout, $cookies) {
    Object.assign(this, { $q, $http, $timeout, $cookies });
    this[_identity] = undefined;
    this[_authenticated] = false;
  }

  logout() {
    this[_identity] = null;
  }
  isIdentityResolved() {
    return angular.isDefined(this[_identity]);
  }
  isAuthenticated() {
    return this[_authenticated];
  }
  isInRole(role) {
    if (!this[_authenticated] || !this[_identity].roles) {
      return false;
    }
    return this[_identity].roles.indexOf(role) !== -1;
  }
  isInAnyRole(roles) {
    if (!this[_authenticated] || !this[_identity].roles) {
      return false;
    }
    for (let i = 0; i < roles.length; i++) {
      if (this.isInRole(roles[i])) return true;
    }
    return false;
  }
  getIdentity() {
    return this[_identity]
  }
  authenticate(identity) {
    this[_identity] = identity;
    this[_authenticated] = identity !== null;

    if (identity) {
      if (identity.expires) {
        let expireDate = new Date();
        let time = expireDate.getTime();
        time += identity.expires * 1000;
        expireDate.setTime(time);
        identity.expireDate = expireDate;
        this.$cookies.put('userInfo', angular.toJson(identity), { expires: expireDate });
      } else {
        this.$cookies.put('userInfo', angular.toJson(identity));
      }
    } else {
      identityService.clearCookies();
      localStorage.clear();
    }
  }

  static clearCookies() {
    let keys = document.cookie.match(/[^ =;]+(?==)/g);
    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        document.cookie = `${keys[i]}=0;expires=${new Date(0).toUTCString()}`;
      }
    }
  }

  identity(force) {
    let self = this;
    let deferred = self.$q.defer();

    if (force === true) {
      self[_identity] = undefined;
    }

    // check and see if we have retrieved the identity data from the server. if we have, reuse it by immediately
    // resolving
    if (angular.isDefined(self[_identity])) {
      deferred.resolve(self[_identity]);
      return deferred.promise;
    }

    self.$timeout(() => {
      self[_identity] = angular.fromJson(self.$cookies.get('userInfo'));
      self.authenticate(self[_identity]);
      deferred.resolve(self[_identity]);
    }, 1000);

    return deferred.promise;
  }
}

identityService.$inject = ['$q', '$http', '$timeout', '$cookies'];

export default identityService;
