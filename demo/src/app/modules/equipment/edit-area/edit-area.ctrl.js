import svgData from './svgData.Geojson.json';

import bgImg from '../../../assets/images/cad-svg/16-F2801S-K0801.svg';

// equipment images
import video from '../../../assets/images/equipment/video.jpeg';
import ACS from '../../../assets/images/equipment/ACS.jpeg';
import text from '../../../assets/images/equipment/text.jpeg';

import errorImg from '../../../assets/images/icon/error.png';
import rotateIcon from '../../../assets/images/icon/rotate.png';

// 图形及对应默认属性
let shapes = [
    {
        type: 'video',
        icon: video,
        geometry: {
            type: 'image'
        },
        attribute: { href: video, x: 10, y: 10, width: 40, height: 40 },
        textAttr: { x: 10, y: 40, width: 40, height: 40, text: '示例文字' }
    }, {
        type: 'ACS',
        icon: ACS,
        geometry: {
            type: 'image'
        },
        attribute: { href: ACS, x: 10, y: 10, width: 40, height: 40 }
    },
    // {
    //     type: 'text',
    //     icon: text,
    //     geometry: {
    //         type: 'text'
    //     },
    //     attribute: { x: 10, y: 40, width: 40, height: 40, text: '示例文字' },
    //     textAttr: { x: 10, y: 40, width: 40, height: 40, text: '示例文字' }

    // },
];

class editAreaCtrl {
    constructor($state, $timeout, toaster, $scope, ngDialog) {
        Object.assign(this, { $state, $timeout, toaster, $scope, ngDialog });


        // 基础图形
        this.shapes = shapes;

        this.subordinateRegions = [
            { id: 1, name: '资料员室' },
            { id: 2, name: '资料室' },
            { id: 3, name: '主任室' }
        ];

        this.selectElementAttr = {
            transform: {
                rotate: 0,
                scale: 1
            }
        };
        this.selectElement = null;

        editAreaCtrl.defaultOption = {
            defaultAttr: {
                class: 'equipment',
                cursor: 'pointer',
            }
        };

        let self = this
        let svg = $('#svg');

        let paper = Snap();

        Snap.load(bgImg, function (f) {
            paper.append(f);
            // 放大，缩小，拖拽    
            paper.zpd({ drag: true });

            self.contentPaper = paper.select('g');
            // 在svg上加标注
            self.creatShapes(svgData.features, self);
            editAreaCtrl.addHanders(self);

            svg.append(paper.node);
        });
    }

    static addHanders(self) {
        self.contentPaper.click(function (e) {
            let element = $(e.target).parent();

            if (element.attr('drag') === 'true') {
                self.select(Snap._.wrap(element[0]));
            }
        })

        self.contentPaper.dblclick(function (e) {
            let element = $(e.target).parent();

            if (element.attr('drag') === 'true') {
                Snap._.wrap(element[0]).remove();
            }
        })

        // self.contentPaper.
    }

    saveSvg() {
        let set = this.contentPaper.selectAll(`.${editAreaCtrl.defaultOption.defaultAttr.class}`);
        let data = [];

        set.forEach(function (element, index) {
            let shapeData = element.data('shapeData');
            data.push({
                type: shapeData.type,
                geometry: shapeData.geometry,
                attribute: element.attr()
            });
        });

    }

    // 添加标注
    creatShapes(shapes, isSelect) {
        let self = this;

        if (Object.prototype.toString.call(shapes) == '[object Array]') {

            $.each(shapes, function (index, value, array) {

                let g = self.contentPaper.g()
                    .attr({
                        class: editAreaCtrl.defaultOption.defaultAttr.class,
                        drag: true,
                        cursor: 'pointer'
                    });

                let element = self.contentPaper.el(value.geometry.type,
                    Object.assign({}, editAreaCtrl.defaultOption.defaultAttr, value.attribute));

                let text = self.contentPaper.el('text', {
                    x: value.attribute.x + 5,
                    y: value.attribute.y + value.attribute.height + 18,
                    width: value.attribute.width,
                    height: value.attribute.height,
                    stroke: '#000',
                    strokeWidth: 0.1,
                    fontSize: 10,
                    // fill: '#fff',
                    text: '描述',
                    fontFamily: 'Times New Roman'
                });

                let textBBox = text.getBBox();

                let rect = self.contentPaper.el('rect', {
                    x: textBBox.x - 5,
                    y: textBBox.y - 4,
                    width: textBBox.width + 10,
                    height: textBBox.height + 8,
                    stroke: '#000',
                    strokeWidth: 0.5,
                    fill: '#fff'
                })

                g.add(element, rect, text);

                self.setShapeData(g, value);

                if (isSelect) {
                    self.select(g, 'no');
                }
            });

        }
    }

    select(element, isApply) {
        let self = this;

        self.selectElement = element;
        self.selectElement.shapeData = element.data('shapeData');


        self.selectElementAttr = Object.assign({}, self.selectElement.data('attrData') ? self.selectElement.data('attrData') : {});

        // self.selectorParentGroup(element);


        if (!isApply) {
            try {
                self.$scope.$apply();
            } catch (e) {
            }
        }

    }

    selectorParentGroup(element) {
        let self = this;

        if (this.contentPaper.select('#selectorParentGroup')) {
            this.contentPaper.select('#selectorParentGroup').remove();
        }

        let BBox = element.getBBox();

        let selectorParentGroup = this.contentPaper.g().attr({
            id: 'selectorParentGroup'
        })

        let attr = {
            width: 6,
            height: 6,
            fill: '#4f80ff',
            stroke: '#4f80ff',
            cursor: ''
        }

        let offset = 6;
        let x = [BBox.x - offset, BBox.cx - offset / 2, BBox.x2];
        let y = [BBox.y - offset, BBox.cy - offset / 2, BBox.y2];
        let pointers = ['nw-resize', 'w-resize', 'sw-resize', 'n-resize', '', 's-resize', 'ne-resize', 'e-resize', 'se-resize'];

        let startPos;
        let startMove;
        // 添加放大标记
        for (let i = 0; i < x.length; i++) {
            for (let j = 0; j < y.length; j++) {

                if (i == 1 && j == 1) {
                    continue;
                }

                let rect = this.contentPaper.rect(x[i], y[j], attr.width, attr.height)
                    .attr(Object.assign({}, attr, { cursor: pointers[i * 3 + j] }))
                    .mousedown(function (e) {
                        e.stopPropagation();
                        let target = $(e.target);

                        startMove = true;
                        startPos = {
                            x: e.pageX,
                            y: e.pageY,
                        }
                    })
                    .mousemove(function (e) {
                        if (startMove) {
                            let BBox1 = element.getBBox();

                            let dx = (e.pageX - startPos.x) / BBox1.width + 1;
                            let dy = (e.pageY - startPos.y) / BBox1.height + 1;


                            Snap._.wrap(e.target).attr({
                                x: BBox1.x + (e.pageX - startPos.x),
                                y: BBox1.y + (e.pageY - startPos.y)
                            })

                            if (dx < 0 && dy < 0) {
                                return;
                            }

                            self.selectElement.scale(dx, dy);

                            // self.selectorParentGroup(self.selectElement);

                        }
                        // startMove = false;
                    }).mouseup(function () {
                        startMove = false;
                    });

                selectorParentGroup.add(rect);
            }
        }

        // self.contentPaper.


        let cOffset = 20;
        let cxArr = [BBox.x - cOffset / 2 - offset / 2, BBox.x2 + cOffset / 2 + offset / 2]
        let cyArr = [BBox.y - cOffset / 2 - offset / 2, BBox.y2 + cOffset / 2 + offset / 2]
        // 添加旋转标记
        // for(let i = 0; i < cxArr.length; i++) {
        //     for(let j = 0; j < cyArr.length; j++) {

        //         let cycle = this.contentPaper.circle(cxArr[i], cyArr[j], cOffset/2)
        //             .attr({
        //                 class: 'rotateIcon',
        //                 cursor: "url("+ rotateIcon+")" + cOffset + " " + cOffset + ", auto",
        //                 fillOpacity: 0
        //             });

        //         selectorParentGroup.add(cycle);
        //     }
        // }

        // this.selectElement.add(selectorParentGroup);

    }

    setShapeData(element, shapeData) {
        element.data('shapeData', Object.assign(shapeData));
    }

    setAttrData() {
        this.selectElement.data('attrData', this.selectElementAttr)
    }

    scale(value) {
        if (this.selectElement) {
            this.selectElement.scale(value);
            this.setAttrData();
        }
    }

    rotate(value) {
        if (this.selectElement) {
            this.selectElement.rotate(value);
            this.setAttrData();
        }
    }

    changeTextContent(value) {
        let rect = this.selectElement.select('rect')
        let text = this.selectElement.select('text');

        text.attr('text', value);

        let textBBox = text.getBBox();

        rect.attr({
            width: textBBox.width + 8,
        });
    }
}

editAreaCtrl.$inject = ['$state', '$timeout', 'toaster', '$scope', 'ngDialog'];

export default editAreaCtrl;
