angular
  .module('ngClassifieds', ["ngMaterial"])
  .config(function($mdThemingProvider) {

    $mdThemingProvider.theme('defualt')
      .primaryPalette('teal')
      .accentPalette('orange');
  })
  .directive('helloWorld', function() {
    return {
      template: '<h1>{{ message }}</h1>'
    }
  });

(function() {

	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {

			classifiedsFactory.getClassifieds().then(function(classifieds) {
				$scope.classifieds = classifieds.data;
				// console.log(classifieds.data);
			});

			
		var contact = {
			name: 'Udi Elenberg',
			phone: '0523324553',
			email: 'udielenberg@github.com'
		}

		$scope.openSidebar = function() {
			$mdSidenav('left').open();
		}

		$scope.closeSidebar = function() {
			$mdSidenav('left').close();
		}

		$scope.saveClassified = function(classified) {
			if(classified){
				classified.contact = contact;
				$scope.classifieds.push(classified);
				$scope.classified = {};
				$scope.closeSidebar();
				$mdToast.show(
					$mdToast.simple()
						.content("Classified saved!")
						.position('top, right')
						.hideDelay(3000)
				);
			}

		}	

		$scope.editClassified = function(classified) {

			$scope.editing = true;
			$scope.openSidebar();
			$scope.classified = classified;
		}	

	});
})();

(function(){

	"use strict";

	angular
		.module("ngClassifieds")
		.factory("classifiedsFactory", function($http) {

			function getClassifieds() {
				return $http.get('js/mock.json');	
			}

			return {
				getClassifieds: getClassifieds
			}

		});

})();