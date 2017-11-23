import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
    const otherwise = '/3D-demo';
    RouterHelper.configureStates(getStates(), otherwise);
}

function getStates() {
    return [
        {
            state: '3dDemo',
            config: {
                url: '/3dDemo',
                parent: 'root.layout',
                views: {
                    'main@root': {
                        templateProvider: ['$q', $q => $q(resolve => {
                            require.ensure([], () => {
                                resolve(require('./3D-demo.html'));
                            }, '3D-demo');
                        })],
                        controller: 'threeDemoCtrl as vm',
                    }
                },
                data: {
                    title: '3dDemo', // 用于展示选项卡上的名称
                    description: '', // 页面功能描述
                    _class: '3dDemo', // 页面功能描述
                    requireLogin: true, // 需要加上的特殊的类
                    roles: ['user'], // 赋予菜单权限的用户角色组
                    icon: 'glyphicon glyphicon-equalizer', // 菜单图标类名
                    type: 2 // 菜单类型（0,1,2,3）
                    // 0: 表示像登录页这种不需要在侧边栏和历史选项卡中显示的菜单
                    // 1: 表示目录
                    // 2: 表示具体在侧边栏显示的菜单项
                    // 3: 表示需要在历史选项卡中显示，但不需要在侧边栏菜单中显示的类型
                },
                breadcrumb: '3D-demo',
                resolve: {
                    loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
                        require.ensure([], () => {
                            let module = require('./3D-demo.module');
                            $ocLazyLoad.inject({ name: module.default.name });
                            resolve(module);
                        }, '3D-demo');
                    })]
                }
            }
        }
    ];
}

export default angular.module('app.routes.3D-demo', [])
    .run(appRun);
