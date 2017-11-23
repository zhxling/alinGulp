
import angular from 'angular'

import createApplicationCtrl from './ctrl'

import './createApplication.less'

export default angular.module('app.modules.system.createApplicationCtrl', [])
  .controller('createApplicationCtrl', createApplicationCtrl)
