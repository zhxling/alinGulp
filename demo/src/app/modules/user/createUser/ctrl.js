class createUserCtrl {
  constructor($state, $timeout, toaster) {
    Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time)
  }

  create() {
    const self = this;
    self.toaster.pop({
        type: 'success',
        body: '创建用户成功!',
      });
      self.$timeout(function(){self.$state.go('userList')},2000);
  }
}



createUserCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default createUserCtrl;
