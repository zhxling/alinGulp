import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun(RouterHelper) {
    RouterHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'buildingModelList',
            config: {
                url: '/buildingModelList',
                parent: 'equipment',
                views: {
                    'main@root': {
                        templateProvider: ['$q', $q => $q(resolve => {
                            require.ensure([], () => {
                                resolve(require('./buildingModelList.html'));
                            }, 'buildingModelList');
                        })],
                        controller: 'buildingModelListCtrl as vm',
                    },
                },
                resolve: {
                    loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(resolve => {
                        require.ensure([], () => {
                            let module = require('./module');
                            $ocLazyLoad.inject({ name: module.default.name });
                            resolve(module);
                        }, 'buildingModelList');
                    })]
                },
                data: {
                    title: '建筑/区域模型列表',
                    _class: 'user-view',
                    requireLogin: true,
                    roles: ['user'],
                    icon: '',
                    type: 2
                },
            }
        }
    ];
}

export default angular.module('app.routes.buildingModelList', [])
    .run(appRun);
