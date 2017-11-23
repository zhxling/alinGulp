
import angular from 'angular'

import createBuildingModelCtrl from './ctrl'

import './createBuildingModel.less'

export default angular.module('app.modules.equipment.createBuildingModelCtrl', [])
  .controller('createBuildingModelCtrl', createBuildingModelCtrl)
