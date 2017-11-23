import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'buildingModelDetail',
      config: {
        url: '/buildingModelDetail',
        parent: 'equipment',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./buildingModelDetail.html'));
              }, 'buildingModelDetail');
            })],
            controller: 'buildingModelDetailCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'buildingModelDetail');
          })]
        },
        data: {
          title: '建筑/区域模型详情',
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

export default angular.module('app.routes.buildingModelDetail', [])
  .run(appRun);
