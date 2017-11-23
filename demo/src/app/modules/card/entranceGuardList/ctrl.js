class entranceGuardListCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })

    this.time = new Date();
    console.log(this.time)
  }

  detail() {
      const self = this;
      self.$state.go('entranceGuardDetail');
  }

    delete() {
        const self = this;
        self.toaster.pop({
            type: 'success',
            body: '删除门禁设备成功!',
        });
        self.$state.go('entranceGuardList');
    }

    playVideo() {
        const self = this;
        self.$state.go('playVideo');
    }

    cardHistory() {
        const self = this;
        self.$state.go('cardHistory');
    }
}

entranceGuardListCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default entranceGuardListCtrl;
