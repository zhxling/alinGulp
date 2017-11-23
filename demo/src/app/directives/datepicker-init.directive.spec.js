import aGreatEye from './datepicker-init.directive';

describe('navbar', function () {
  let $compile;
  let scpoe;

  beforeEach(() => {
    angular.module('test', [])
      .directive('aGreatEye', aGreatEye);
    angular.mock.module('test');
  });

  beforeEach(() => {
    angular.mock.inject(($rootScope, _$compile_) => {
      $compile = _$compile_;
      scpoe = $rootScope.$new();
    });
  })


  it('directive 测试', function () {
    let element = $compile('<a-great-eye></a-great-eye>')(scpoe);
    scpoe.$digest();
    expect(element.html()).to.contain('title');
  });
});
