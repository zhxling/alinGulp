class threeDemoCtrl {
    constructor() {
        console.log(THREE)
        let element = document.querySelector('.wrap-height');
        this.wrapElement = element;
        this.width = element.offsetWidth;
        this.height = element.offsetHeight;
        this.initScene();
        this.initCamera();
        this.initRender();

        // 添加3D对象
        $.each(this.objList, function (index, _obj) {
            this.InitAddObject(_obj);
        });
    }

    // 初始化渲染器
    initRender() {
        let self = this;
        self.renderer = new THREE.WebGLRenderer({ alpha: true });
        self.renderer.setSize(self.width, self.height);
        self.wrapElement.appendChild(self.renderer.domElement);
    }

    // 初始化摄像机
    initCamera() {
        let self = this;
        self.camera = new THREE.PerspectiveCamera(45, self.width / self.height, 1, 100000);
    }

    // 创建场景
    initScene() {
        let self = this;
        self.scene = new THREE.Scene();
    }

    // 添加对象
    addObject(_obj) {
        let self = this;
        self.objects.push(_obj);
        self.scene.add(_obj);
    }

    /* 添加对象 */
    InitAddObject(_obj) {
        let self = this;
        if (_obj.show == null || typeof (_obj.show) == 'undefined' || _obj.show) {
            let _tempObj = null;
            switch (_obj.objType) {
            case 'cube':
                _tempObj = self.createCube(self, _obj);
                self.addObject(_tempObj);
                break;
            case 'floor':
                _tempObj = self.CreateFloor(_obj)
                self.addObject(_tempObj);
                break;
            case 'wall':
                self.CreateWall(self, _obj);
                break;
            case 'plane':
                _tempObj = self.createPlaneGeometry(self, _obj);
                self.addObject(_tempObj);
                break;
            case 'glasses':
                break;
            case 'emptyCabinet':
                break;
            case 'cloneObj':
                break;
            default:
                break;
            }
        }
    }

    // 创建盒子体
    createCube(_this, _obj) {
        if (_this == null) {
            _this = this;
        }
        let _length = _obj.length || 1000;// 默认1000
        let _width = _obj.width || _length;
        let _height = _obj.height || 10;
        let geometry = new THREE.CubeGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({})

        return cube;
    }

}

threeDemoCtrl.$inject = [];

export default threeDemoCtrl;
