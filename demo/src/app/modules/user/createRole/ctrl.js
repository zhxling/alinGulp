class createRoleCtrl {
  constructor($state, $timeout, toaster) {
    Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time)
  }

    create() {
        const self = this;
        self.toaster.pop({
            type: 'success',
            body: '创建角色成功!',
        });
        self.$timeout(function(){self.$state.go('roleList')},2000);
    }
}

createRoleCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default createRoleCtrl;
