
import angular from 'angular'

import cardHistoryCtrl from './ctrl'

import './cardHistory.less'

export default angular.module('app.modules.card.cardHistoryCtrl', [])
  .controller('cardHistoryCtrl', cardHistoryCtrl)
