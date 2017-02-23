"use strict";
/*
 * Load app modules
 */
angular.module('bairroApp', [
  'ngRoute',
  'ngAnimate',
  'ngMaterial',
  // Views
  'bairroApp.login',
  'bairroApp.inicio',
  'bairroApp.authUtils',
  // Loading bar for AJAX requests
  'cfp.loadingBarInterceptor'
])
/*
 * Set url routings
 */
  .config(function($routeProvider, cfpLoadingBarProvider) {
    $routeProvider
      .when('/',
            { templateUrl: 'views/login/login.html',
              controller: 'LoginController',
	      controllerAs: 'vmLoginCtrl'})
      .when('/registro',
            { templateUrl: 'views/registro/registro.html',
              controller: 'RegistroController'})
      .when('/inicio',
            { templateUrl: 'views/inicio/inicio.html',
              controller: 'InicioController'})
      .when('/status',
            { templateUrl: 'views/status/status.html',
              controller: 'StatusController'})
      .when('/sobre', { templateUrl: 'views/sobre/sobre.html'})
      .otherwise({redirectTo: '/'});

    // Desativar o loding
    cfpLoadingBarProvider.includeSpinner = true;
  })
/*
 * Check that user is authenticated, redirect otherwise.
 * TODO: cookies are not removed with logout
 */
  .run(function($location, usuarioService) {
      var usuariologado = usuarioService.getUser();
  	if(usuariologado == undefined){
            console.log("Por favor inicie uma nova sessão");
	    $location.path('/');
	}
  });
