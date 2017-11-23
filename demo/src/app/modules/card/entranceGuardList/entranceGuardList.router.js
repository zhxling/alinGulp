import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'entranceGuardList',
      config: {
        url: '/entranceGuardList',
        parent: 'card',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./entranceGuardList.html'));
              }, 'entranceGuardList');
            })],
            controller: 'entranceGuardListCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'entranceGuardList');
          })]
        },
        data: {
          title: '门禁设备列表',
          _class: 'user-view',
          requireLogin: true,
          roles: ['user'],
          icon: '',
          type: 2
        },
      }
    }
  ];
}

export default angular.module('app.routes.entranceGuardList', [])
  .run(appRun);
