
import angular from 'angular'

import equipmentListCtrl from './ctrl'

import './equipmentList.less'

export default angular.module('app.modules.equipment.equipmentListCtrl', [])
  .controller('equipmentListCtrl', equipmentListCtrl)
