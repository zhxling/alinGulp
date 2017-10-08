
import LoginRouter from '../components/login/login.router' //登入路由定义js 

export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', LoginRouter)
        .state('home', {
            url: '/home',
            template: '<home></home>'
        })
}

routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];