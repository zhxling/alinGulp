class buildingModelDetailCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time)
  }


    next() {
        const self = this;
        self.$state.go('buildingModelList');
    }

}

buildingModelDetailCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default buildingModelDetailCtrl;
