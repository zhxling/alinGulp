class cardHistoryCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time)
  }

}

cardHistoryCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default cardHistoryCtrl;
