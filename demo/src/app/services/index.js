import angular from 'angular';

// constant
import eventConstant from './event.constant';

// services
import RouterHelperProvider from './router-helper.provider';
import authService from './authService';
import httpInterceptorService from './httpInterceptorService';
import identityService from './identityService';

const common = angular.module('app.common', []);

common
  .constant('eventConstant', eventConstant)
  .provider('RouterHelper', RouterHelperProvider)
  .service('authService', authService)
  .service('httpInterceptorService', httpInterceptorService)
  .service('identityService', identityService)
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptorService');
  }])


export default common;
