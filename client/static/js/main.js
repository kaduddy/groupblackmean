var ourApp = angular.module('ourApp', ['ngRoute']);

ourApp.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "/partials/login.html",
		controller: "usersController",
		controllerAs: "usersCtrl"
	})
	.when("/dashboard", {
		templateUrl: "/partials/dashboard.html",
		controller: "bucketlistsController",
		controllerAs: "bucketlistsCtrl"
	})
	.when("/user/:id", {
		templateUrl: "/partials/user.html",
		controller: "userbucketlistController",
		controllerAs: "userbucklistCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
})