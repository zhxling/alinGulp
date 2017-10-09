module.exports = angular => {
  const dashboardModule = angular.module('dashboardModule', []);
  require('./dashboard.ctrl')(dashboardModule);
}
