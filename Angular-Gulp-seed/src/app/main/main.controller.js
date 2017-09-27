'use strict';

angular.module('inspinia')
  .controller('MainController', ['$rootScope',function ($rootScope) {
    $rootScope.menuTree = formatMenu(routes);

    function formatMenu(rawData) {
        var data = $.extend([],rawData);
        var menuTree = [];
        var cycleQueue = [];
        var i;
        var j;
        var temp;
        for(i = 0; i<data.length; i++) {
            if(!data[i].parent) {
                cycleQueue.push(data[i]);
                menuTree.push(data[i]);
                continue;
            }

            var flag = true;
            for(j = 0; j < data.length; j++) {
                if(data[i].parent == data[j].state) {
                    flag =false;
                    break;
                }
            }

            if(flag) {
                cycleQueue.push(data[i]);
                menuTree.push(data[i]);
            }
        }
        while(cycleQueue.length) {
            temp = cycleQueue.shift();
            temp.children = [];
            for(i = 0; i < data.length; i++) {
                if(temp.state === data[i].parent) {
                    temp.children.push(data.splice(i, 1)[0]);
                    i--;
                }
            }

            cycleQueue = cycleQueue.concat(temp.children);
        }

        return menuTree;
    }
  }]);
