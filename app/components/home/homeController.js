angular.module('homeCtrl', ['carousel'])
	.controller('homeCtrl', ['$scope', home]);

function home($scope){
	var vm = this;

	vm.title = "Welcome to Marketplace!";
	vm.subtitle = "A basic marketplace application built with Angular v1.";

	$scope.links = [
		{src: './assets/img/download.jpeg',  caption: 'Picture 1'},    
		{src: './assets/img/download1.jpeg', caption: 'Picture 2'},    
		{src: './assets/img/download2.jpeg', caption: 'Picture 3'}
	];
}