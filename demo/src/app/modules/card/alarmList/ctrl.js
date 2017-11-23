class alarmListCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })
        $("[data-toggle='popover']").popover();

  }

    playVideo() {
        const self = this;
        self.$state.go('playVideo');
    }


}

alarmListCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default alarmListCtrl;
