class roleListCtrl {
  constructor($state, $timeout, toaster, ngDialog, $scope) {
    Object.assign(this, { $state, $timeout, toaster, ngDialog, $scope})

      $("[data-toggle='popover']").popover();

    $scope.data = 'dddf';

  }

    create() {
        const self = this;
        self.$state.go('createRole');
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

    roleAuthorize() {
        const self = this;
        //self.$state.go('roleAuthorize');
        console.log(self.$scope)
        self.ngDialog.open({
            template: 'roleAuthorize',
            controller: `roleAuthorizeCtrl as vm`,
            scope: self.$scope,
            width: '60%',
            //className: 'dialog',
            showClose: true,
        })
    }

    modifyAuthorize() {
        self.ngDialog.close('id', 'roleAddPlain');
        const self = this;
        self.toaster.pop({
            type: 'success',
            body: '修改角色权限成功!',
        });
        self.$state.go('roleList');
    }




}

roleListCtrl.$inject = ['$state', '$timeout', 'toaster', 'ngDialog', '$scope'];

export default roleListCtrl;
