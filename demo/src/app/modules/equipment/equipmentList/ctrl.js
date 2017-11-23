class equipmentListCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    this.show = false;
    console.log(this.time)
  }

  detail() {
      const self = this;
      self.$state.go('equipmentDetail');
  }
  link() {
      const self = this;
      self.$state.go('equipmentLink');
  }

  delete() {
      const self = this;
      self.toaster.pop({
          type: 'success',
          body: '删除设备成功!',
      });
      self.$state.go('equipmentList');
  }
  showUpload(){
      this.show = !this.show;
  }

  submitFile(){
      const self = this;
      self.toaster.pop({
          type: 'success',
          body: '导入设备文件成功!',
      });
      this.show = !this.show;
  }
}

equipmentListCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default equipmentListCtrl;
