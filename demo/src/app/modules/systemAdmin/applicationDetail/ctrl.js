class applicationDetailCtrl {
  constructor($state, $timeout, toaster) {
    Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time);
    this.showCreateZone = false;
    this.showCreateBuilding = false;
    this.showCreateFloor = false;
    this.showCreateFunctionalArea = false;
  }

  next() {
      const self = this;
      self.$state.go('applicationList');
  }

}




applicationDetailCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default applicationDetailCtrl;
