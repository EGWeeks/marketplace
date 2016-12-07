angular.module('navDir', [])
	.directive('ewNavbar', [navbar]);

	function navbar() {
		return {
			templateUrl : './app/shared/navbar/navbarView.html',
			controller : 'homeCtrl',
			controllerAs : 'HC'
		};
	}