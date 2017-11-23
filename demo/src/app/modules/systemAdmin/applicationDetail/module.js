
import angular from 'angular'

import applicationDetailCtrl from './ctrl'

import './applicationDetail.less'

export default angular.module('app.modules.system.applicationDetailCtrl', [])
  .controller('applicationDetailCtrl', applicationDetailCtrl)
