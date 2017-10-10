webpackJsonp([3],{

/***/ 132:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"padding-left:100px\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" ui-sref=\"dashboard\">Demo</a>\n    </div>\n    <div>\n      <ul class=\"nav navbar-nav\">\n        <li><a ui-sref=\"login\" ui-sref-active=\"active\" ng-if=\"!userInfo\">Login</a></li>\n        <li><a ui-sref=\"about\" ui-sref-active=\"active\">About</a></li>\n        <li><a ng-click=\"logout()\" style=\"cursor: pointer\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <section ui-view=\"dashboard\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <p class=\"text-primary\">Welcome, {{userInfo.username}}</p>\n      </div>\n    </div>\n    <div>\n      <h3>get data from mock api server</h3>\n      <pre>{{list|json}}</pre>\n    </div>\n  </section>\n</div>\n";

/***/ })

});
//# sourceMappingURL=3.547ca155dccd297a4f63.js.map