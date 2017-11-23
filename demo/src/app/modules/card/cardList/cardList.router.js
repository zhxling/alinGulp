import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  RouterHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'cardList',
      config: {
        url: '/cardList',
        parent: 'card',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./cardList.html'));
              }, 'cardList');
            })],
            controller: 'cardListCtrl as vm',
          },
        },
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, 'cardList');
          })]
        },
        data: {
          title: '卡列表',
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

export default angular.module('app.routes.cardList', [])
  .run(appRun);
