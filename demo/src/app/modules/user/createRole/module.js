
import angular from 'angular'

import createRoleCtrl from './ctrl'

import './createRole.less'

export default angular.module('app.modules.user.createRoleCtrl', [])
  .controller('createRoleCtrl', createRoleCtrl)
