angular.module('carousel', []).directive('carousel', ['$timeout', carousel]);

function carousel($timeout) {
  return {
    restrict: 'E',
    scope: {
      slides: '='
    },
    templateUrl: './app/shared/carousel/carouselView.html',
    link: function(scope, element) {
      $timeout(function() {
        $('.carousel-indicators li',element).first().addClass('active');
        $('.carousel-inner .item',element).first().addClass('active');
      });
    }
  };
}