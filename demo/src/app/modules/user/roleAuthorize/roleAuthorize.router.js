import angular from 'angular'

import roleAuthorizeCtrl from './ctrl'
import html from './roleAuthorize.html'

import './roleAuthorize.less'

export default angular.module('app.modules.user.roleAuthorizeCtrl', [])
    .controller('roleAuthorizeCtrl', roleAuthorizeCtrl)
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('roleAuthorize', html);
    }]);