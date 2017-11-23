class headerCtrl {
  constructor($rootScope, eventConstant) {
    Object.assign(this, { $rootScope, eventConstant });

    this.$rootScope.$on(this.eventConstant.loginSuccess, this.updateHeader.bind(this));
    this.$rootScope.$on(this.eventConstant.logoutSuccess, this.updateHeader.bind(this));
  }

  updateHeader(e, userInfo) {
    if (userInfo) {
      this.isLoggedIn = true;
      this.userInfo = userInfo;
    } else {
      this.isLoggedIn = false;
      this.userInfo = null;
    }
  }
}

headerCtrl.$inject = ['$rootScope', 'eventConstant'];

export default headerCtrl;
