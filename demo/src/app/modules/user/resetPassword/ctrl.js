class resetPasswordCtrl {
  constructor($state) {
    Object.assign(this, [$state])

    this.time = new Date();
    console.log(this.time)
  }
}

resetPasswordCtrl.$inject = ['$state'];

export default resetPasswordCtrl;
