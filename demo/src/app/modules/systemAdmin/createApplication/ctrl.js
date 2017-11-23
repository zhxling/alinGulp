class createApplicationCtrl {
  constructor($state, $timeout, toaster) {
    Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time);
    this.showCreateZone = false;
    this.showCreateBuilding = false;
    this.showCreateFloor = false;
    this.showCreateFunctionalArea = false;
  }

  create() {
    const self = this;
    self.toaster.pop({
        type: 'success',
        body: '创建第三方应用成功!',
      });
      self.$timeout(function(){self.$state.go('applicationList')},2000);
  }

}




createApplicationCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default createApplicationCtrl;
