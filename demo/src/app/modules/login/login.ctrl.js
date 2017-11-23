class loginController {
  constructor($rootScope, $scope, $state, eventConstant, identityService, loginApi) {
    Object.assign(this, { $rootScope, $scope, $state, eventConstant, identityService, loginApi });

    this.routeAfterLogin = 'alarmList';

    // handle logout
    const { action } = this.$state.params;
    if (action === 'logout') {
      identityService.authenticate(null);
      this.$rootScope.$broadcast(this.eventConstant.logoutSuccess);
    }
  }

  logIn() {
    const self = this;
    const loginInfo = {
      username: self.username,
      password: self.password,
      roles: ['user']
    };

      // self.identityService.authenticate(Object.assign({ username: self.username }, {}));
      // self.$state.go(self.routeAfterLogin);
    self.loginApi
      .save(loginInfo, res => {
        self.$rootScope.$broadcast(self.eventConstant.loginSuccess, res.data);
        self.identityService.authenticate(Object.assign({ username: self.username }, res.data));

        if (self.$rootScope.returnToState) {
          self.$state.go(self.$rootScope.returnToState.name, self.$rootScope.returnToStateParams);
        } else {
          self.$state.go(self.routeAfterLogin);
        }
      })
  }
}

loginController.$inject = ['$rootScope', '$scope', '$state', 'eventConstant', 'identityService', 'loginApi'];

export default loginController
