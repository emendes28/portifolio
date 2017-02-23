"use strict";
angular.module('bairroApp.login', ['bairroApp.usuarioAutenticacao'])
	.controller('LoginController', LoginCtrl);

function LoginCtrl($scope, $timeout, $location, usuarioService) {
    var vmLoginCtrl = this;
    vmLoginCtrl.login = usuarioService.login;
    vmLoginCtrl.novoUsuario = window.location="#/novo";
    function novoUsuario(){
}
