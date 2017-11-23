import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'roleList',
      config: {
        url: '/roleList',
        parent: 'user',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./roleList.html'));
              }, 'roleList');
            })],
            controller: 'roleListCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'roleList');
          })]
        },
        data: {
          title: '角色列表',
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

export default angular.module('app.routes.roleList', [])
  .run(appRun);
