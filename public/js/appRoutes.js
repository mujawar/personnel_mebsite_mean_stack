angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/profile.html',
			controller: 'ProfileController'
		})

		.when('/trip', {
			templateUrl: 'views/Trip.html',
			controller: 'MainController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		});


	$locationProvider.html5Mode(true);

}]);