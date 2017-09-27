(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    var moduleBaseUrl = 'app/modules/';
    $stateProvider
      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('user', {
        abstract: true,
        parent: 'index',
        url: "/user",
        template: '<div ui-view></div>'
      })
      .state('user.setting', {
        url: "/setting",
        templateUrl: moduleBaseUrl + "user/setting.html",
        data: {}
      })
      .state('user.notifications', {
        url: "/notifications",
        templateUrl: moduleBaseUrl + "user/notifications.html",
        data: {}
      });

    $urlRouterProvider.otherwise('/index/user/setting');
  }

})();
