class roleAuthorizeCtrl {
  constructor($state, $timeout, toaster, ngDialog, $scope) {
    Object.assign(this, { $state, $timeout, toaster, ngDialog, $scope})

    this.time = new Date();
    console.log($scope);
  }

    modifyRole() {
        const self = this;
        self.ngDialog.close();
         self.toaster.pop({
            type: 'success',
            body: '角色授权成功!',
        });
        self.$timeout(function(){self.$state.go('roleList')},2000);
    }
}

roleAuthorizeCtrl.$inject = ['$state', '$timeout', 'toaster', 'ngDialog', '$scope'];

export default roleAuthorizeCtrl;
