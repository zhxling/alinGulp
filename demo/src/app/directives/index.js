import angular from 'angular'

import demo from './demoDirective'
// import DatepickerInitDirective from './datepicker-init.directive';
export default angular.module('app.directives', [])
  .directive('copyright', demo)
// .directive('aioDatepickerInit', DatepickerInitDirective)
