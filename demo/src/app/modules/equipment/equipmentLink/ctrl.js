class equipmentLinkCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time)
  }


    createLink () {
        const self = this;
        self.toaster.pop({
            type: 'success',
            body: '设备与模型/区域关联建立成功!',
        });
        self.$timeout(function(){self.$state.go('equipmentList')},2000);
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

equipmentLinkCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default equipmentLinkCtrl;
