  require('./login.less')
let LoginRouter = {
    name: 'login',
    url: '/login',
    data: {
      roles: []
    },
    templateProvider: ['$q', $q => { // 动态引入html模板
      let deferred = $q.defer();
      require.ensure([], () => {
        let template = require('./login.html');
        deferred.resolve(template);
      });
      return deferred.promise;
    }],
    controller: 'loginController',
    resolve: {
      '': ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
        // https://webpack.js.org/api/module-methods/#require-ensure
        require.ensure([], () => {
          let loginModule = require('./login.module.js')(angular);
          $ocLazyLoad.load({
            name: 'loginModule'
          });
          resolve(loginModule);
        });
      })]
    },
};
export default LoginRouter;