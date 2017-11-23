
import angular from 'angular'

import modifyUserCtrl from './ctrl'

import './modifyUser.less'

export default angular.module('app.modules.user.modifyUserCtrl', [])
  .controller('modifyUserCtrl', modifyUserCtrl)
