import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'user',
      config: {
        url: '/user',
        parent: 'root.layout',
        template: '<div ui-view></div>',
        data: {
          title: '用户管理',
          _class: 'user-view',
          requireLogin: true,
          roles: ['user'],
          icon: '',
          type: 1
        }
      }
    }
  ];
}

export default angular.module('app.routes.user', [])
  .run(appRun);
