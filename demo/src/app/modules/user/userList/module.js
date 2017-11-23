
import angular from 'angular'

import userListCtrl from './ctrl'

import './userList.less'

export default angular.module('app.modules.user.userListCtrl', [])
  .controller('userListCtrl', userListCtrl)
