class userListCtrl {
  constructor($state, $timeout, toaster, ngDialog, $scope) {
    Object.assign(this, { $state, $timeout, toaster, ngDialog, $scope})

    this.time = new Date();
    console.log(this.time)
  }

    create() {
        const self = this;
        self.$state.go('createUser');
    }

    detail() {
        const self = this;
        self.$state.go('userDetail');
    }

    modify() {
        const self = this;
        self.$state.go('modifyUser');
    }

    delete() {
        const self = this;
        self.toaster.pop({
            type: 'success',
            body: '删除用户成功!',
        });
        self.$state.go('userList');
    }
    userRole() {
        const self = this;
        self.ngDialog.open({
            template: 'userRole',
            controller: `userRoleCtrl as vm`,
            scope: self.$scope,
            width: '60%',
            //className: 'dialog',
            showClose: true,
        })
    }

}

userListCtrl.$inject = ['$state', '$timeout', 'toaster', 'ngDialog', '$scope'];

export default userListCtrl;
