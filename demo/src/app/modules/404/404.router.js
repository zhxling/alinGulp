import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
  const otherwise = '/404';
  RouterHelper.configureStates(getStates(), otherwise);
}

function getStates() {
  return [
    {
      state: 'notfound',
      config: {
        url: '/404',
        parent: 'root.layout',
        views: {
          'main@root': {
            templateProvider: ['$q', $q => $q(resolve => {
              require.ensure([], () => {
                resolve(require('./404.html'));
              }, '404');
            })]
          },
          'sidebar@root': {}
        },
        data: {
          title: '404',
          _class: 'notfound'
        },
        breadcrumb: '404',
        resolve: {
          loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
            require.ensure([], () => {
              let module = require('./404.module');
              $ocLazyLoad.inject({ name: module.default.name });
              resolve(module);
            }, '404');
          })]
        }
      }
    }
  ];
}

export default angular.module('app.routes.404', [])
  .run(appRun);
