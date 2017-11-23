
import angular from 'angular'

import userDetailCtrl from './ctrl'

import './userDetail.less'

export default angular.module('app.modules.user.userDetailCtrl', [])
  .controller('userDetailCtrl', userDetailCtrl)
