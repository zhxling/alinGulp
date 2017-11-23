class modifyCardRoleCtrl {
  constructor($state, $timeout, toaster) {
    Object.assign(this, { $state, $timeout, toaster })
  }

  modify() {
    const self = this;
    self.toaster.pop({
        type: 'success',
        body: '修改卡权限成功!',
      });
      self.$timeout(function(){self.$state.go('cardList')},2000);
  }

}




modifyCardRoleCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default modifyCardRoleCtrl;
