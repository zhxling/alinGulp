function aGreatEye() {
  return {
    restrict: 'E',
    replace: true,
    template: '<h1>this title</h1>'
  };
}

aGreatEye.$inject = [];

export default aGreatEye;
