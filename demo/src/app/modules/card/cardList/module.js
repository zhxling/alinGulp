
import angular from 'angular'

import cardListCtrl from './ctrl'

import './cardList.less'

export default angular.module('app.modules.card.cardListCtrl', [])
  .controller('cardListCtrl', cardListCtrl)
