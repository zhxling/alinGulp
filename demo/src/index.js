// 加载第三方依赖(安装的依赖包如果不能直接require进来，就需要写完全路径去加载进来)
// 当路径不以./或../开头时，webpack会自动从node_modules里面去加载依赖包
import 'bootstrap/dist/js/bootstrap.min';
import 'metismenu/dist/metisMenu.min';
import 'metismenu/dist/metisMenu.css';

import angular from 'angular';

/* 加载依赖css */
import 'angular-loading-bar/src/loading-bar.css';
import 'animate.css/animate.css';

import 'angularjs-toaster';
import 'ng-dialog/css/ngDialog.min.css'
import 'ng-dialog/css/ngDialog-theme-default.css'

import 'angularjs-toaster/toaster.min.css';

import './app/less/bootstrap.less';
import './app/less/style.less';

import commonService from './app/services';
import directives from './app/directives';
import filters from './app/filters';
import layout from './app/components/layout';

import * as THREE from 'three';

window.THREE = THREE;

const ngDepModules = [
    require('oclazyload'),
    require('angular-cookies'),
    require('angular-sanitize'),
    require('angular-animate'),
    require('angular-ui-router'),
    require('angular-messages'),
    require('angular-loading-bar'),
    require('angular-resource'),
    'toaster',
    'ngDialog',
    commonService.name,
    directives.name,
    filters.name,
    layout.name,
];

// 公共模块
const components = require.context('./app/components', true, /^((?!layout).)*\/index\.js$/);
components.keys().forEach(key => {
    if (components(key).default.name !== 'app.layout') {
        ngDepModules.push(components(key).default.name);
    }
});

// 功能模块
const Routers = require.context('./app/modules', true, /\.router\.js$/);
Routers.keys().forEach(key => {
    ngDepModules.push(Routers(key).default.name);
});

// 打包svg
require.context('./app/assets/images', true, /\.(svg|jpeg|jpg|png)$/);

// 打包video
require.context('./app/assets/video', true, /\.(mp4|ogg)$/);


// define one angular module
export default angular.module('demoApp', ngDepModules)
    .config(['$ocLazyLoadProvider', '$compileProvider',
        function ($ocLazyLoadProvider, $compileProvider) {
            // https://stackoverflow.com/questions/41116962/
            // directives-passing-parameter-undefined-while-updating-1-5-x-to-1-6-angular/41117676#41117676
            $compileProvider.preAssignBindingsEnabled(true);
            // 按需加载配置
            $ocLazyLoadProvider.config({
                debug: true,
                events: true
            });
        }])
    .run(['$rootScope', '$state', 'authService',
        function ($rootScope, $state, authService) {
            $rootScope.$state = $state;

            $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {

                $rootScope.toState = toState;
                $rootScope.toStateParams = toParams;

                if (toState.data.requireLogin) {
                    authService.authorize();
                }
            });

            $rootScope.$on('$stateChangeSuccess', () => {
            });
        }])
