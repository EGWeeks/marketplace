angular.module('homeCtrl', [])
	.controller('homeCtrl', [home]);

function home(){
	var vm = this;

	vm.title = "Welcome to Marketplace!";
	vm.subtitle = "A basic marketplace application built with Angular v1.";
}