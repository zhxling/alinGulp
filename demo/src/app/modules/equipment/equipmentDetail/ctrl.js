class equipmentDetailCtrl {
  constructor($state) {
    Object.assign(this, { $state })

    this.time = new Date();
    console.log(this.time)
  }

  next() {
    const self = this;
    self.$state.go('equipmentList');
  }
}

equipmentDetailCtrl.$inject = ['$state'];

export default equipmentDetailCtrl;
