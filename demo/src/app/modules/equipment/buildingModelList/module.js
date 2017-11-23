
import angular from 'angular'

import buildingModelListCtrl from './ctrl'

import './buildingModelList.less'

export default angular.module('app.modules.equipment.buildingModelListCtrl', [])
  .controller('buildingModelListCtrl', buildingModelListCtrl)
