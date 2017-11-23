import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'equipmentDetail',
      config: {
        url: '/equipmentDetail',
        parent: 'equipment',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./equipmentDetail.html'));
              }, 'equipmentDetail');
            })],
            controller: 'equipmentDetailCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'equipmentDetail');
          })]
        },
        data: {
          title: '设备详情',
          _class: 'user-view',
          requireLogin: true,
          roles: ['user'],
          icon: '',
          type: 3
        },
      }
    }
  ];
}

export default angular.module('app.routes.equipmentDetail', [])
  .run(appRun);
