class modifyBuildingModelCtrl {
  constructor($state, $timeout, toaster) {
    Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time);
    this.showCreateZone = false;
    this.showCreateBuilding = false;
    this.showCreateFloor = false;
    this.showCreateFunctionalArea = false;
  }

  modify() {
    const self = this;
    self.toaster.pop({
        type: 'success',
        body: '修改建筑模型成功!',
      });
      self.$timeout(function(){self.$state.go('buildingModelList')},2000);
  }


}




modifyBuildingModelCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default modifyBuildingModelCtrl;
