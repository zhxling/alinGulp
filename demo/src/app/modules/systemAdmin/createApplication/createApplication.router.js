import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'createApplication',
      config: {
        url: '/createApplication',
        parent: 'systemAdmin',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./createApplication.html'));
              }, 'createApplication');
            })],
            controller: 'createApplicationCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'createApplication');
          })]
        },
        data: {
          title: '新建第三方应用',
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

export default angular.module('app.routes.createApplication', [])
  .run(appRun);
