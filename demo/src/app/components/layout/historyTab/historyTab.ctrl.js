class historyTabCtrl {
    constructor($state, $rootScope, RouterHelper) {
        Object.assign(this, { $state, $rootScope, RouterHelper });
        this.navs = [];

        this._applyNewBreadcrumb(this.$state.current);

        // this.$rootScope.$on('$stateChangeSuccess', (event, toState, toParams) => {
        this.$rootScope.$on('$stateChangeSuccess', (event, toState) => {
            this._applyNewBreadcrumb(toState);
        });
    }

    _applyNewBreadcrumb(curState) {
        if (!curState.abstract && curState.data.requireLogin && curState.parent && curState.parent != 'root') {

            for (let i = 0; i < this.navs.length; i++) {
                if (this.navs[i].name == curState.name) {
                    return;
                }
            }
            this.navs.push({
                link: (curState.params ? `${curState.name}(${JSON.stringify(curState.params)})` : curState.name),
                text: curState.data.title,
                name: curState.name,
                icon: curState.data.icon
            })
        }
    }

    deleteItem(event, index) {
        event.preventDefault();
        this.navs.splice(index, 1);
    }
}

historyTabCtrl.$inject = ['$state', '$rootScope', 'RouterHelper'];

export default historyTabCtrl;
