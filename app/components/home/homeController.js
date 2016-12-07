angular.module('homeCtrl', ['carousel'])
	.controller('homeCtrl', ['$scope', home]);

function home($scope){
	var vm = this;

	vm.title = "Welcome to Marketplace!";
	vm.subtitle = "A basic marketplace application built with Angular v1.";

	$scope.slides = [
		{src: './assets/img/fo-micah-h.jpg',  caption: 'snowy hills'},    
		{src: './assets/img/austin-neill.jpg', caption: 'yosemite night'},    
		{src: './assets/img/geran-de-klerk.jpg', caption: 'tree top'}
	];
}