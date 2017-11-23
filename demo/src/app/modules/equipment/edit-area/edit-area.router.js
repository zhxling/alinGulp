import angular from 'angular';

appRun.$inject = ['RouterHelper'];
function appRun (RouterHelper) {
    RouterHelper.configureStates(getStates());
}

function getStates () {
    return [
        {
            state: 'editArea',
            config: {
                url: '/editArea',
                parent: 'equipment',
                views: {
                    'main@root': {
                        templateProvider: ['$q', ($q) => {
                            return $q((resolve) => {
                                require.ensure([], () => {
                                    resolve(require('./edit-area.html'));
                                }, 'editArea');
                            });
                        }],
                        controller: 'editAreaCtrl as vm',
                    },
                },
                resolve: {
                    loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                let module = require('./edit-area.module');
                                $ocLazyLoad.inject({name: module.default.name});
                                resolve(module);
                            }, 'editArea');
                        });
                    }]
                },
                params: {
                    areaSrc: '',
                },
                data: {
                    title: '编辑区域',
                    _class: 'edit-area-view',
                    requireLogin: true,
                    roles: ['user'],
                    icon: '',
                    type: 3
                },
            }
        }
    ];
}

export default angular.module('app.routes.editArea', [])
    .run(appRun);