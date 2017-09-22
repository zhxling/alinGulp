'use strict';

/**
 * @ngdoc overview
 * @name yoAngularProjectApp
 * @description
 * # yoAngularProjectApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
