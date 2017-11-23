import svgData from './svgData.Geojson.json';

import errorImg from '../../assets/images/icon/error.png';

class dashboardCtrl {
    constructor($state, $timeout, toaster, $scope, ngDialog) {
        Object.assign(this, { $state, $timeout, toaster, $scope, ngDialog });

        dashboardCtrl.defaultOption = {
            defaultAttr: {
                class: 'equipment',
                cursor: 'pointer',
            }
        };

        this.init(svgData['1000'].bgSvg, svgData['1000'].items);
        this.initTree();
    }

    init(bgSvg, svgData) {
        this.selectElementAttr = {};
        this.selectElement = null;
        this.equipments = [];

        let self = this
        let svg = $('#svg');
        svg.find('svg').remove();

        let paper = Snap();

        Snap.load(bgSvg, function (f) {
            paper.append(f);
            // 放大，缩小，拖拽    
            paper.zpd();

            self.contentPaper = paper.select('g');
            // 在svg上加标注
            dashboardCtrl.addFeatures(svgData, self);
            dashboardCtrl.addHanders(self);

            svg.append(paper.node);
        });
    }

    initTree() {
        let self = this;
        let json = [
            { id: 1000,
                name: '厂区',
                authorized: false,
                type: 'zone',
                children: [
                    { id: 1100,
                        parent: 1000,
                        name: '办公楼',
                        type: 'building',
                        children: [
                            { id: 1110,
                                parent: 1100,
                                name: '楼层一',
                                type: 'floor',
                                children: [
                                    { id: 1111, parent: 1100, iconclass: 'icon-user', noAction: true, name: '功能区1', type: 'functionArea' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        let options = {
            json: $.extend(true, [], json),
            branchRightBtns: {
                btnGroup: {
                }
            },
            leafRightBtns: {
            },
            isCollapsedAll: false,
            onSelectRow(element) {
                let data = element.data();

                self.init(svgData[data.id].bgSvg, svgData[data.id].items);
                self.$scope.$apply();
            },
        };

        this.nestableOption = options;
    }

    toggleLeft() {
        $('.left-side').parent().toggleClass('showLeftSide');
    }

    toggleRight() {
        $('.right-side').parent().toggleClass('showRightSide');
    }

    static addFeatures(svgData, self) {
        $.each(svgData, function (index, value, array) {

            let element = self.contentPaper.el(value.geometry.type,
                Object.assign({}, dashboardCtrl.defaultOption.defaultAttr, value.attribute))
                .data(value);

            let BBox = element.getBBox();

            if (value.properties.state === 0) {
                self.contentPaper.image(errorImg, BBox.cx - 10, BBox.y - 20, 20, 20)
                    .attr({
                        title: value.properties.message
                    })
                    .hover(function (e) {
                        let t = self.contentPaper.transform().localMatrix.split();
                        let left = BBox.x * t.scalex + t.dx;
                        let top = BBox.y * t.scaley + t.dy;
                        $('#svg').append(`${'<div id="tip-bubble" style="'
                            + ' left: '}${left}px;`
                            + ` top: ${top}px" >${
                                value.properties.message
                            }</div>`);
                    }, function () {
                        $('#tip-bubble').remove();

                    })
            }
        });
    }

    static addHanders(self) {
        self.contentPaper.click(function (e) {
            if ($(e.target).attr('class').toLowerCase().includes(dashboardCtrl.defaultOption.defaultAttr.class)) {

                let element = Snap._.wrap(e.target);
                let data = element.data();

                switch (data.type) {
                case 'equipment':
                    self.showEquipmentDetail(data);
                    break;
                default:
                    self.showRegion(data);
                    break;
                }
            }
        })

        $(document).on('click', function (e) {
            if ($(e.target).attr('class') !== 'equipment') {
                self.ngDialog.close();
            }
        })
    }

    showEquipmentDetail(data) {
        let self = this;

        for (let i = 0; i < self.equipments.length; i++) {
            if (self.equipments[i].id === data.properties.id) {
                self.equipments.splice(i, 1);
                break;
            }
        }

        self.equipments.unshift(data.properties)
        self.$scope.$apply();
        $('.right-side').parent().addClass('showRightSide');
    }

    showRegion(data) {
        this.init(svgData[data.id].bgSvg, svgData[data.id].items);
        this.$scope.$apply();
    }

    delete(index) {
        this.equipments.splice(index, 1);
    }

}

dashboardCtrl.$inject = ['$state', '$timeout', 'toaster', '$scope', 'ngDialog'];

export default dashboardCtrl;
