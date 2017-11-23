import angular from 'angular';

import ctrl from './svg-equipment-popup.ctrl';
import html from './index.html';
import './svg-equipment-popup.less';

export default angular.module('app.components.svgEquipmentPopup', [])
    .controller('svgEquipmentPopupCtrl', ctrl)
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('templateId', html);
    }]);