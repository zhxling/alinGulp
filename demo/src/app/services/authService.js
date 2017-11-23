// import angular from 'angular'

class authService {
  constructor($rootScope, $state, identityService, $timeout, eventConstant) {
    Object.assign(this, { $rootScope, $state, identityService, $timeout, eventConstant });
  }

  authorize() {
    let self = this;

    self.identityService.identity()
      .then(() => {
        const isAuthenticated = self.identityService.isAuthenticated();

        if (isAuthenticated) {
          //  判断用户是否还在登录状态，若已登录则广播登录成功事件
          self.$rootScope.$broadcast(self.eventConstant.loginSuccess, self.identityService.getIdentity());
          // 用户已登录
          // 如果用户（所处角色）没有拥有路由权限
          if (self.$rootScope.toState.data.roles &&
            self.$rootScope.toState.data.roles.length > 0 &&
            !self.identityService.isInAnyRole(self.$rootScope.toState.data.roles)) {
            // user is signed in but not authorized for denied state
            self.$state.go('notAuth');
          }
        } else {
          // 用户没登录，记录用户登录后想要跳转的路由
          self.$rootScope.returnToState = self.$rootScope.toState;
          self.$rootScope.returnToStateParams = self.$rootScope.toStateParams;

          // redirect to login state
          self.$state.go('login');
        }
      })
  }
}

authService.$inject = ['$rootScope', '$state', 'identityService', '$timeout', 'eventConstant'];

export default authService;
