'use strict';

angular.module('routeConfig',['ngRoute', 'angular-loading-bar'])
	.config(['$httpProvider', '$routeProvider', 'cfpLoadingBarProvider', routeConfig]);


function routeConfig($httpProvider, $routeProvider, cfpLoadingBarProvider) {
	cfpLoadingBarProvider.includeSpinner = false;
	cfpLoadingBarProvider.includeBar = true;

	// $httpProvider.interceptors.push('authInterceptor');

	$routeProvider

		.when('/', {
			templateUrl: 'app/components/home/homeView.html',
			controller: 'homeCtrl',
			controllerAs: 'HC'
		})

		.otherwise({ redirectTo: '/'});
}