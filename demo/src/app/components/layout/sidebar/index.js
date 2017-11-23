

import angular from 'angular';

import sidebarCtrl from './sidebar.ctrl';
import sidebarHtml from './sidebar.html';
import { sideNavigation } from './sidebar.directives';

require('./sidebar.less')

const sidebar = angular.module('app.components.sidebar', [])
  .controller('sidebarCtrl', sidebarCtrl)
  .directive('sideNavigation', sideNavigation);

export { sidebar, sidebarHtml, sidebarCtrl };
