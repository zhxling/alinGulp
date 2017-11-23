class applicationListCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time)
  }

  create() {
      const self = this;
      self.$state.go('createApplication');
  }

  modify() {
      const self = this;
      self.$state.go('modifyApplication');
  }

  detail() {
      const self = this;
      self.$state.go('applicationDetail');
  }

  delete() {
      const self = this;
      self.toaster.pop({
          type: 'success',
          body: '删除第三方应用成功!',
      });
      self.$state.go('applicationList');
  }
}

applicationListCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default applicationListCtrl;
