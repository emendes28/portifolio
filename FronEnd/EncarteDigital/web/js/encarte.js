angular
  .module('myApp',['ngMaterial'])
.controller('GridCtrl', ['$scope', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.grid = [[1,2,3],[4,5,6],[7,8,9]];
	 $scope.toggleLeft = buildDelayedToggler('left');
	    $scope.toggleRight = buildToggler('right');
	    $scope.isOpenRight = function(){
	      return $mdSidenav('right').isOpen();
	    }
 $scope.close = function () {
   $mdSidenav('right').close()
     .then(function () {
       $log.debug("close RIGHT is done");
     })};
  }]);


