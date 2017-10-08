import angular from 'angular';
import uirouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyLoad';
//引用创建头部 组件
// import Header from './header';
//路由
import routing from "./router.js";
//引入两个子模块
console.log(23);
import Home from "../home";
// import Router from "./router";
angular.module('app', [uirouter, ocLazyLoad, Home])
.config(routing)