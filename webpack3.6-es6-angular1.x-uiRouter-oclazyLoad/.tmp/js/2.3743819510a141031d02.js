webpackJsonp([2],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (angular) {
  var dashboardModule = angular.module('dashboardModule', []);
  __webpack_require__(136)(dashboardModule);
};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (dashboardModule) {
  dashboardModule.controller('dashboardController', function ($rootScope, $scope, $state, apiRequest, identityService) {
    $scope.userInfo = window._DB.get('userInfo');
    console.log(window._DB.get('userInfo'));
    apiRequest.get('list').then(function (res) {
      $scope.list = res.data;
    });

    $scope.logout = function () {
      window._DB.remove('userInfo');
      localStorage.clear();
      identityService.logout();
      $state.go('login');
    };
  });
};

/***/ })

});
//# sourceMappingURL=2.3743819510a141031d02.js.map