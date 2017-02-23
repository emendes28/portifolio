var app = angular.module('searchBarApp', ['ngMaterial']);

app.controller('searchCtrl', function () {
  var ctrl = this;
  ctrl.search = null;
  ctrl.showPreSearchBar = function(){ return ctrl.search == null; };
  ctrl.initiateSearch = function() {
    ctrl.search = '';
  };
  ctrl.showSearchBar = function(){ return ctrl.search != null };
  ctrl.endSearch = function() { return ctrl.search = null; };
  ctrl.submit = function() { console.error('Search function not yet implemented'); }
  ctrl.produtos = [{nome:'Feijão', dataValidade:'27/08/2016', quantidade:4},{nome:'Arroz', dataValidade:'23/06/2016', quantidade:5},{nome:'Farinha', dataValidade:'12/08/2016', quantidade:1},{nome:'Milho verde', dataValidade:'17/05/2016', quantidade:2},{nome:'Macarrão', dataValidade:'23/08/2016', quantidade:3}];
});
