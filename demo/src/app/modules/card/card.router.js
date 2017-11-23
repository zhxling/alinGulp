import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'card',
      config: {
        url: '/card',
        parent: 'root.layout',
        template: '<div ui-view></div>',
        data: {
          title: '一卡通',
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

export default angular.module('app.routes.card', [])
  .run(appRun);
