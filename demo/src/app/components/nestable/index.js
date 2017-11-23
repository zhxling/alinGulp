import angular from 'angular';

import './nestable';
import './nestable.less';

const nestableTree = angular.module('app.components.tree', [])
  .directive('nestableTree', () => ({
    restrict: 'A',
    scope: {
      nestableOption: '='
    },
    templateUrl: 'components/directives/loading.html',
    link(scope, element) {
      element.nestable(scope.nestableOption);
    },
  }));

export default nestableTree;
