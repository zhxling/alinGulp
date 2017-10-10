require('./dashboard.less')
let dashboardRouter =
  {
    name: 'dashboard',
    url: '/dashboard',
    parent: '',
    data: {
      roles: ['user']
    },
    // you can also use
    templateProvider: ['$q', $q => { // 动态引入html模板
      let deferred = $q.defer();
      require.ensure([], function () {
        let template = require('./dashboard.html');
        deferred.resolve(template);
      });
      return deferred.promise;
    }],
    controller: 'dashboardController',
    resolve: {
      '': ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
        require.ensure([], () => {
          let dashboardModule = require('./dashboard.module.js')(angular);
          $ocLazyLoad.load({
            name: 'dashboardModule'
          });
          resolve(dashboardModule);
        });
      })]
    },
};
export default dashboardRouter;