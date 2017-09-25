// import modules from './index.module';
import run from './index.run';
import routerConfig from './index.route';

angular
    .module('inspinia', [
        require('angular-ui-router'),
        // require('ui.bootstrap'),
        require('oclazyload'),
        ])
    .config(routerConfig)
    .run(run);