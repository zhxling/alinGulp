let routerConfig = ($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('index', {
      abstract: true,
      url: "/index",
      templateUrl: "app/components/common/content.html"
    })
    .state('index.setting', {
      url: "/setting",
      templateUrl: "app/modules/user/setting.html",
      data: { pageTitle: 'Example view' },
      controller: 'settingCtrl'
    });

  $urlRouterProvider.otherwise('/index/setting');
}

export {routerConfig}