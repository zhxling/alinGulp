
import angular from 'angular'

import roleListCtrl from './ctrl'

import './roleList.less'

export default angular.module('app.modules.user.userListCtrl', [])
  .controller('roleListCtrl', roleListCtrl)
