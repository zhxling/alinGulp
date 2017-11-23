class entranceGuardDetailCtrl {
  constructor($state) {
    Object.assign(this, { $state })

    this.time = new Date();
    console.log(this.time)
  }

  next() {
    const self = this;
    self.$state.go('entranceGuardList');
  }
}

entranceGuardDetailCtrl.$inject = ['$state'];

export default entranceGuardDetailCtrl;
