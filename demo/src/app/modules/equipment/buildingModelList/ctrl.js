// import bgImg from '../../../assets/images/16-office-floor-2.svg'

class buildingModelListCtrl {
    constructor($state, $timeout, toaster, $scope) {
        Object.assign(this, { $state, $timeout, toaster, $scope })

        this.rightTemplate = '';
        let self = this;

        let json = [
            /*
            {
                id:1,
                name: '区域1',    // 必须项，用于tree显示节点名称
                type: 'branch',    // 必须项，用于表明该节点的类型,值为：branch、leaf ; branch表示该节点为组节点，可包含leaf节点 ; leaf表明该节点为孤立节点
                ddidentity: 44,  // 必须项，用于唯一身份标识
                noAction: true,   // 可选项，表示节点右边是否需要btns
                iconclass: 'icon-user', // 可选项，用于为节点添加图标，字体图标的类名
                classes: '',  // 可选项，用于为节点添加类, 当为“dd-isolated”, 表明该节点为未分配组, 当tree中的leaf节点被删除时，如果该同名leaf节点不再存在于除了拥有“dd-isolated”类的节点组中，如果有拥有“dd-isolated”类的节点组,则把该被删除的leaf节点则被加入到“dd-isolated”类的节点组中
                checked: true,  // 可选项，如果tree右边有checkboxBtn, 该值表明该节点该 checkbox的初始状态
                editable: false, // 可选项，表明该节点是否可用，若为false,  则该节点处于不可用状态，所有右侧btn会被隐藏
            },
            */
            { id: 1,
                name: '区域1',
                checked: true,
                type: 'zone',
                linkImg: '../../../assets/images/cad-svg/16-F2801S-K0801.svg',
                children: [
                    { id: 1001, iconclass: 'icon-user', noAction: true, name: '建筑11', iconclass: 'icon-user', type: 'leaf' },
                    { id: 1002, iconclass: 'icon-user', name: '建筑12', iconclass: 'icon-user', type: 'leaf' },
                ]
            },
            { id: 2,
                name: '区域2',
                authorized: false,
                type: 'zone',
                children: [
                    { id: 2001,
                        name: '建筑21',
                        type: 'building',
                        children: [
                            { id: 2003001,
                                name: '楼层1',
                                type: 'floor',
                                children: [
                                    { id: 2003001, iconclass: 'icon-user', noAction: true, name: '功能区211', iconclass: 'icon-user', type: 'functionArea' },
                                    { id: 2003002, iconclass: 'icon-user', noAction: true, name: '功能区212', iconclass: 'icon-user', type: 'functionArea' },
                                    { id: 2003003, iconclass: 'icon-user', noAction: true, name: '功能区213', iconclass: 'icon-user', type: 'functionArea' },
                                    { id: 2003004, iconclass: 'icon-user', noAction: true, name: '功能区214', iconclass: 'icon-user', type: 'functionArea' }
                                ]
                            }
                        ]
                    },
                    { id: 2002,
                        name: '建筑22',
                        type: 'branch',
                        children: [
                            { id: 2002001,
                                name: '楼层1',
                                type: 'branch',
                                children: [
                                    { id: 2002001, iconclass: 'icon-user', noAction: true, name: '功能区221', iconclass: 'icon-user', type: 'leaf' },
                                    { id: 2002002, iconclass: 'icon-user', noAction: true, name: '功能区222', iconclass: 'icon-user', type: 'leaf' },
                                    { id: 2002003, iconclass: 'icon-user', noAction: true, name: '功能区223', iconclass: 'icon-user', type: 'leaf' },
                                    { id: 2002004, iconclass: 'icon-user', noAction: true, name: '功能区224', iconclass: 'icon-user', type: 'leaf' }
                                ]
                            }
                        ]
                    },
                    { id: 2003,
                        name: '建筑23',
                        type: 'branch',
                        children: [
                            { id: 2003001,
                                name: '楼层1',
                                type: 'branch',
                                children: [
                                    { id: 2003001, iconclass: 'icon-user', noAction: true, name: '功能区231', iconclass: 'icon-user', type: 'leaf' },
                                    { id: 2003002, iconclass: 'icon-user', noAction: true, name: '功能区232', iconclass: 'icon-user', type: 'leaf' },
                                    { id: 2003003, iconclass: 'icon-user', noAction: true, name: '功能区233', iconclass: 'icon-user', type: 'leaf' },
                                    { id: 2003004, iconclass: 'icon-user', noAction: true, name: '功能区234', iconclass: 'icon-user', type: 'leaf' }
                                ]
                            }
                        ]
                    },
                ]
            }
        ];
        let options = {
            json: $.extend(true, [], json),
            branchRightBtns: {
                btnGroup: {
                    editBtn: {
                        class: 'glyphicon glyphicon-pencil', //  字体图标类名
                        onclick(element, promise) {
                            let data = element.data();
                            console.log(data)
                            // promise.resolve();
                            $state.go('editArea', { areaSrc: data.linkimg })

                        },
                    },
                    addBranchBtn: {
                        // onclick: function(element, promise) {
                        //     var data = element.data();
                        //     promise.resolve();
                        // },
                    },
                    addLeafBtn: {
                        // onclick: function(element, promise) {
                        //     var data = element.data();
                        //     promise.resolve();
                        // }
                    },
                    // checkboxBtn: {
                    //     cascadeChecked: true,    // 可选，默认为true,是否要级联修改组下的leaf的checkbox,
                    //     leafDisabled: false,    // 可选，默认为false, 当组的checkbox为false时，组下leaf是否会被禁用, 当cascadeChecked为true时，该属性才起作用
                    //     asynCheck: false,  //是否需要等异步成功关联修改leaf节点, 当cascadeChecked为true时，该属性才起作用，默认false
                    //     onclick: function(element, promise) {
                    //         promise.resolve();
                    //     },
                    // }
                }
            },
            leafRightBtns: {
                btnGroup: {
                    deleteLeafBtn: {
                        // onclick: function(element, promise) {
                        //     var data = element.data();
                        //     promise.resolve();
                        // },
                    },
                    // checkboxBtn: {
                    //     cascadeChecked: true,    // 可选，默认为true,是否要级联修改其父节点的checkbox,
                    //     asynCheck: false,  // 可选，默认为false, 是否不需要等异步成功关联修改父节点的checkbox
                    //     onclick: function(element, promise) {
                    //         promise.resolve();
                    //     },
                    // }
                }
            },
            isCollapsedAll: true,
            searchable: true,
            showLeafCheckbox: {
                show: true,
                value: true,
                label: '显示成员',
            },
            onSelectRow(element, promise) {
                let data = element.data();
                // promise.resolve();
                if (data.type == 'zone') {
                    self.rightTemplate = 'zoneTemplate';
                    self.$scope.$apply();
                } else if (data.type == 'building') {
                    self.rightTemplate = 'buildingTemplate';
                    self.$scope.$apply();
                } else if (data.type == 'floor') {
                    self.rightTemplate = 'floorTemplate';
                    self.$scope.$apply();
                } else if (data.type == 'functionArea') {
                    self.rightTemplate = 'functionAreaTemplate';
                    self.$scope.$apply();
                }

            },
        };

        this.nestableOption = options;

        this.time = new Date();
        console.log(this.time)
    }


    create() {
        const self = this;
        self.$state.go('createBuildingModel');
    }

    detail() {
        const self = this;
        self.$state.go('buildingModelDetail');
    }

    modify() {
        const self = this;
        self.$state.go('modifyBuildingModel');
    }

    delete() {
        const self = this;
        self.toaster.pop({
            type: 'success',
            body: '删除建筑模型成功!',
        });
        self.$state.go('buildingModelList');
    }
}

buildingModelListCtrl.$inject = ['$state', '$timeout', 'toaster', '$scope'];

export default buildingModelListCtrl;
