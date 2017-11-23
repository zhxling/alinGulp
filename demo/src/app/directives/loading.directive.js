function loading() {
  return {
    restrict: 'A',
    transclude: true,
    scope: {},
    template: '<div class="base-loading-layer">' +
                    '<div class="loader-outer">' +
                    '<div class="loader-inner line-scale-pulse-out-rapid">' +
                    '<div></div>' +
                    '<div></div>' +
                    '<div></div>' +
                    '<div></div>' +
                    '<div></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
    // compile(tElement, tAttr, transclude) {
    compile() {
    },
    // link(scope, element, attrs) {
    link() {
    }
  }
}

loading.$inject = [];
export default loading;
