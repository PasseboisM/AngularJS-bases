// Declaration du module principal avec ngRoute
var monApp = angular.module('monApp', ['ngRoute']);

// Configuration du provider
monApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);