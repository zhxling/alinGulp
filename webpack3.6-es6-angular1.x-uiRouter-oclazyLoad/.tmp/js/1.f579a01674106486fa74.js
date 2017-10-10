webpackJsonp([1],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (angular) {
  var loginModule = angular.module('loginModule', []);
  __webpack_require__(135)(loginModule);
  __webpack_require__(55)(loginModule);
  // require('../common/apiRequest')(loginModule);
};

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (loginModule) {
  loginModule.controller('loginController', function ($rootScope, $scope, $state, $stateParams, identityService, apiRequest) {
    var a = 'modules/login/login.less';
    console.log(/modules[a-zA-z0-9\/]*\.less$/.test(a));
    $scope.logIn = function () {
      var loginInfo = {
        username: $scope.username,
        password: $scope.password,
        roles: ['user']
      };
      apiRequest.put('login', loginInfo).then(function (res) {
        return identityService.authenticate(Object.assign({ username: $scope.username }, res.data));
      }).then(function () {
        if ($scope.returnToState) {
          $state.go($scope.returnToState.name, $scope.returnToStateParams);
        } else {
          $state.go('dashboard');
        }
      });
    };
  });
};

/***/ })

});
//# sourceMappingURL=1.f579a01674106486fa74.js.map