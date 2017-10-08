import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyLoad';
import services from './server'
import commonComponents from './commonComponents';
import appRouter from './config/app.router';
import './assets/css/main.less';


import style from './app.less';


//import './app.css';
let appComponent = {
    restrict: 'E',
    template: require('./app.html'),
    controller: function () {
        this.class = style;
    },
    controllerAs: 'app'
};

export default angular.module('sass', [uiRouter, ocLazyLoad, services, commonComponents])

    .config(appRouter)
    .component('app', appComponent)
    .name;
