import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'createUser',
      config: {
        url: '/createUser',
        parent: 'user',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./createUser.html'));
              }, 'createUser');
            })],
            controller: 'createUserCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'createUser');
          })]
        },
        data: {
          title: '新建用戶',
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

export default angular.module('app.routes.createUser', [])
  .run(appRun);
