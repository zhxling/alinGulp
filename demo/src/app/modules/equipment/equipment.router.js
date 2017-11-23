import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'equipment',
      config: {
        url: '/equipment',
        parent: 'root.layout',
        template: '<div ui-view></div>',
        data: {
          title: '设备与建筑模型管理',
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

export default angular.module('app.routes.equipment', [])
  .run(appRun);
