
import angular from 'angular'

import applicationListCtrl from './ctrl'

import './applicationList.less'

export default angular.module('app.modules.system.applicationListCtrl', [])
  .controller('applicationListCtrl', applicationListCtrl)
