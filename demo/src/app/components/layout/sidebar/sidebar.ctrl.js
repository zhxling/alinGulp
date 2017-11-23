class SidebarCtrl {
  constructor(RouterHelper, $scope, $rootScope) {
    Object.assign(this, { RouterHelper, $scope, $rootScope });

    // generate sidebar nav menus
    this.navs = this._getNavMenus();
    console.log(this.nav);
    // tell others we have sidebar
    this.$rootScope.hasSidebar = true;
    this.$scope.$on('$destroy', () => {
      this.$rootScope.hasSidebar = false;
    });
  }

  hideSidebar() {
    this.$rootScope.showSidebar = false;
  }

  _getNavMenus() {
    const allStates = this.RouterHelper.getStates();
    const navs = SidebarCtrl.formatMenu(allStates);

    return navs;
  }

  static formatMenu(rawData) {
    let data = $.extend([], rawData);
    let menuTree = [];
    let cycleQueue = [];
    let i;
    let j;
    let temp;

    // 获取顶级菜单
    for (i = 0; i < data.length; i++) {
      // 去除非菜单路由
      if (data[i].data && (data[i].data.type === 1 || data[i].data.type === 2)) {
        temp = data[i].data;
        temp.link = data[i].name;
        temp.name = data[i].name;

        if (!data[i].parent) {
          cycleQueue.push(temp);
          menuTree.push(temp);
        } else {
          let flag = true;
          for (j = 0; j < data.length; j++) {
            if (data[i].parent === data[j].name && data[i].parent !== 'root.layout') {
              flag = false;
              break;
            }
          }

          if (flag) {
            cycleQueue.push(temp);
            menuTree.push(temp);
          }
        }
      }
    }

    console.log(cycleQueue);
    // 获取子级菜单
    while (cycleQueue.length) {
      temp = cycleQueue.shift();
      temp.children = [];
      for (i = 0; i < data.length; i++) {
        if (temp.name === data[i].parent && data[i].data.type !== 0 && data[i].data.type !== 3) {
          let child = data.splice(i, 1)[0];
          let childTemp;
          childTemp = child.data;
          childTemp.link = child.name;
          childTemp.name = child.name;
          temp.children.push(childTemp);
          i--;
        }
      }

      cycleQueue = cycleQueue.concat(temp.children);
    }

    return menuTree;
  }
}

SidebarCtrl.$inject = ['RouterHelper', '$scope', '$rootScope'];

export default SidebarCtrl;
