import angular from 'angular'

import demo from './demoFilter'

export default angular.module('app.filters', [])
  .filter('demo', demo)
