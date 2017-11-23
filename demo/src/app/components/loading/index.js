import angular from 'angular';
import ngLoadingBar from 'angular-loading-bar';

import appLoadingConfig from './config';
import './loading.less';

const loading = angular.module('app.components.loading', [
  ngLoadingBar
])
  .config(appLoadingConfig);

export default loading;
