import angular from 'angular';

import roleAuthorizeCtrl from './ctrl'
import html from './userRole.html'

import './userRole.less'

export default angular.module('app.modules.user.userRoleCtrl', [])
    .controller('userRoleCtrl', roleAuthorizeCtrl)
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('userRole', html);
    }]);
