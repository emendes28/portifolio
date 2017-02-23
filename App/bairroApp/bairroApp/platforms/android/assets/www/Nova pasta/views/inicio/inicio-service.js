"use strict";
angular.module("bairroApp.inicio")
		.factory("InicioFactory", InicioFct);

function InicioFct ($http) {
	function getClassifieds() {
		return $http.get('ezpoxY.js');
	}

	return {
		getClassifieds: getClassifieds
	}

}