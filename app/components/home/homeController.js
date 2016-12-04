angular.module('homeCtrl', [])
	.controller('homeCtrl', [home]);

function home(){
	var vm = this;

	vm.title = "Welcome to Vizdea Market!";
	vm.subtitle = "Outdoor gear & equipment marketplace.";
}