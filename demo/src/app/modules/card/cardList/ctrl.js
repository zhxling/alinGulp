class cardListCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time)
  }

  modifyCardRole() {
      const self = this;
      self.$state.go('modifyCardRole');
  }

  history() {
      const self = this;
      self.$state.go('cardHistory');
  }

}

cardListCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default cardListCtrl;
