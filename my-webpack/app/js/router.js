export default function router ($stateProvider, $urlRouterProvider) {
	console.log("df");
    $stateProvider.state("home",{ 
           url:"/home",
           templateUrl:'app/home/home.html',
           controller: "HomeController",
           controllerAs:"HMC",
     })
    $urlRouterProvider.otherwise('/home');
}
router.$inject = [ '$stateProvider', '$urlRouterProvider']