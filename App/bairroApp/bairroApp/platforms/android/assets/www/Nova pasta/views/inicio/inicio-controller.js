"use strict";
angular.module("bairroApp.inicio")
		.controller("InicioController", InicioCtrl);

function InicioCtrl($scope, $http, InicioFactory, $mdSidenav, $mdToast) {
		InicioFactory.getClassifieds().then(function(anuncios) {
			$scope.anuncios = anuncios.data;
			// console.log(anuncios.data);
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

}

