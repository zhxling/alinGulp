
import angular from 'angular'

import buildingModelDetailCtrl from './ctrl'

import './buildingModelDetail.less'

export default angular.module('app.modules.equipment.buildingModelDetailCtrl', [])
  .controller('buildingModelDetailCtrl', buildingModelDetailCtrl)
