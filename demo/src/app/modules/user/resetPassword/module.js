
import angular from 'angular'

import resetPasswordCtrl from './ctrl'

import './resetPassword.less'

export default angular.module('app.modules.user.resetPasswordCtrl', [])
  .controller('resetPasswordCtrl', resetPasswordCtrl)
