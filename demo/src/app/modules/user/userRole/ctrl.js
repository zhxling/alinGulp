class userRoleCtrl {
  constructor($state, $timeout, toaster, ngDialog, $scope) {
    Object.assign(this, { $state, $timeout, toaster, ngDialog, $scope })

    this.time = new Date();
    console.log(this.time)
  }

    modifyRole() {
        const self = this;
        self.ngDialog.close();
        self.toaster.pop({
            type: 'success',
            body: '用户角色修改成功!',
        });
        self.$timeout(function(){self.$state.go('userList')},2000);
    }
}

userRoleCtrl.$inject = ['$state', '$timeout', 'toaster', 'ngDialog', '$scope'];

export default userRoleCtrl;
