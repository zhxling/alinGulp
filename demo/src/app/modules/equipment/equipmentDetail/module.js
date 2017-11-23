
import angular from 'angular'

import equipmentDetailCtrl from './ctrl'

import './equipmentDetail.less'

export default angular.module('app.modules.equipment.equipmentDetailCtrl', [])
  .controller('equipmentDetailCtrl', equipmentDetailCtrl)
