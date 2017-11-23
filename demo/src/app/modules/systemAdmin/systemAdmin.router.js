import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'systemAdmin',
      config: {
        url: '/systemAdmin',
        parent: 'root.layout',
        template: '<div ui-view></div>',
        data: {
          title: '系统管理',
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

export default angular.module('app.routes.systemAdmin', [])
  .run(appRun);
