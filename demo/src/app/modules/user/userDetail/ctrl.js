class userDetailCtrl {
  constructor($state) {
    Object.assign(this, { $state })

    this.time = new Date();
    console.log(this.time)
  }

  next() {
    const self = this;
    self.$state.go('userList');
  }
}

userDetailCtrl.$inject = ['$state'];

export default userDetailCtrl;
