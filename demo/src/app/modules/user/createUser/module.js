
import angular from 'angular'

import createUserCtrl from './ctrl'

import './createUser.less'

export default angular.module('app.modules.user.createUserCtrl', [])
  .controller('createUserCtrl', createUserCtrl)
