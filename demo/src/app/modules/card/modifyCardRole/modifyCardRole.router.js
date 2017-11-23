import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'modifyCardRole',
      config: {
        url: '/modifyCardRole',
        parent: 'card',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./modifyCardRole.html'));
              }, 'modifyCardRole');
            })],
            controller: 'modifyCardRoleCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'modifyCardRole');
          })]
        },
        data: {
          title: '修改卡权限',
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

export default angular.module('app.routes.modifyCardRole', [])
  .run(appRun);
