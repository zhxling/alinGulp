import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'applicationList',
      config: {
        url: '/applicationList',
        parent: 'systemAdmin',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./applicationList.html'));
              }, 'applicationList');
            })],
            controller: 'applicationListCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'applicationList');
          })]
        },
        data: {
          title: '第三方应用列表',
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

export default angular.module('app.routes.applicationList', [])
  .run(appRun);
