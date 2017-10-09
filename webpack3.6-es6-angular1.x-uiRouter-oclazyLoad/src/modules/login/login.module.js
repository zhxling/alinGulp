module.exports = angular => {
  const loginModule = angular.module('loginModule', []);
  require('./login.ctrl')(loginModule);
  require('../../services/identityService')(loginModule);
  // require('../common/apiRequest')(loginModule);
}
