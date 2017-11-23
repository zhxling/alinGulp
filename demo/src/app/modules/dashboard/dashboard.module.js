
import angular from 'angular';

import dashboardCtrl from './dashboard.ctrl';
import dashboardApi from './dashboard.service';

require('./dashboard.less');

export default angular.module('app.modules.dashboard', [])
  .controller('dashboardCtrl', dashboardCtrl)
  .service('dashboardApi', dashboardApi);
