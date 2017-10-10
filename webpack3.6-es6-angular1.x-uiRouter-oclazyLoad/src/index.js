/* 加载依赖css */
require('angular-loading-bar/src/loading-bar.css');
require('bootstrap/dist/css/bootstrap.css');
require('./less/style.less');

/* 工具类库 */
const LocalStore = require('./utils/LocalStore');

const _DB = new LocalStore('__demoDB__');
window._DB = _DB;

let routeStates,
  angular,
  ngDepModules = [];

require('jquery');
angular = require('angular');
ngDepModules= [
  require('oclazyload'),
  require('angular-ui-router'),
  require('angular-messages'),
  require('angular-loading-bar'),
];

// define one angular module
const ngModule = angular.module('demoApp', ngDepModules);

/* 加载核心service */

// 拦截器
require('./services/httpInterceptorService')(ngModule);
// 权限相关
require('./services/identityService')(ngModule);
// 登录处理
require('./services/authService')(ngModule);
// $http简单封装
require('./services/apiRequest')(ngModule);

// load common directives
import directives from './directives/demoDirective';
directives(ngModule)

ngModule.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  '$ocLazyLoadProvider', '$compileProvider', 'cfpLoadingBarProvider',
  ($stateProvider, $urlRouterProvider, $httpProvider, $ocLazyLoadProvider, $compileProvider, cfpLoadingBarProvider) => {
    $httpProvider.interceptors.push('httpInterceptorService');

    // https://stackoverflow.com/questions/41116962/directives-passing-parameter-undefined-while-updating-1-5-x-to-1-6-angular/41117676#41117676
    $compileProvider.preAssignBindingsEnabled(true);

    // 加载进度条配置 https://github.com/chieffancypants/angular-loading-bar
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';

    // 按需加载配置
    $ocLazyLoadProvider.config({
      debug: true,
      events: true
    });

    // 路由注入
    routeStates = require('./router')(angular);

    routeStates.forEach(state => {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise($injector => {
      if (window._DB.get('userInfo')) {
        $injector.get('$state').go('dashboard');
      } else {
        $injector.get('$state').go('login');
      }
    });
  }
]);

ngModule.run(function ($rootScope, $state, authService, identityService) {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {

    $rootScope.toState = toState;
    $rootScope.toStateParams = toParams;

    if (identityService.isIdentityResolved()) {
      authService.authorize();
    }
  });

  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState) => {
  });
});

