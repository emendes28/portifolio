"use strict";
angular.module('bairroApp.login', ['bairroApp.usuarioAutenticacao'])
	.controller('LoginController', LoginCtrl);

function LoginCtrl($scope, $timeout, $location, usuarioService) {
    var vmLoginCtrl = this;
    vmLoginCtrl.login = usuarioService.login;
    vmLoginCtrl.novoUsuario = function (){
          $location.path('/registro');
//	location.href="#/registro";
    }
    vmLoginCtrl.loginFake = function (){
          $location.path('/inicio');

//	location.href="#/inicio";
    }
}
