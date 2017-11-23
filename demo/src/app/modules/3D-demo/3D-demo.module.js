import angular from 'angular'

import './3D-demo.less'

import threeDemoCtrl  from './3D-demo.ctrl'

export default angular.module('app.modules.3D-demo', [])
    .controller('threeDemoCtrl', threeDemoCtrl);
