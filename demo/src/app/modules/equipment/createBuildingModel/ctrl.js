class createBuildingModelCtrl {
  constructor($state, $timeout, toaster) {
    Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time);
    this.showCreateZone = false;
    this.showCreateBuilding = false;
    this.showCreateFloor = false;
    this.showCreateFunctionalArea = false;
  }

  create() {
    const self = this;
    self.toaster.pop({
        type: 'success',
        body: '创建建筑模型成功!',
      });
      self.$timeout(function(){self.$state.go('buildingModelList')},2000);
  }

  createZone() {
      this.showCreateZone = true;
  }
  zoneCreated() {
      this.showCreateZone = false;
  }
  createBuilding() {
      this.showCreateBuilding = true;
  }
  buildingCreated() {
      this.showCreateBuilding = false;
  }
  createFloor() {
      this.showCreateFloor = true;
  }
  floorCreated() {
      this.showCreateFloor = false;
  }
  createFunctionalArea() {
      this.showCreateFunctionalArea = true;
  }
  functionalAreaCreated() {
      this.showCreateFunctionalArea = false;
  }
}




createBuildingModelCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default createBuildingModelCtrl;
