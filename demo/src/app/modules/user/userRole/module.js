
import angular from 'angular'

import userRoleCtrl from './ctrl'

import './userRole.less'

export default angular.module('app.modules.user.userRoleCtrl', [])
  .controller('userRoleCtrl', userRoleCtrl)
