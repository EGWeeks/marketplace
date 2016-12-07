angular.module('carousel', [])
  .directive('carousel', ['$timeout', function($timeout) {
    return {
      restrict: 'E',
      scope: {
        links: '='
      },
      templateUrl: './app/shared/carousel/carouselView.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      }
    };
  }]);