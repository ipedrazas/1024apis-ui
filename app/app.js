'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.deathstar',
  'myApp.kube',
  'myApp.version',
  'myApp.apiserver'
]).
config(['$locationProvider', '$routeProvider', '$httpProvider',
  function($locationProvider, $routeProvider, $httpProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/kube'});
  $httpProvider.defaults.useXDomain = true;
}]);
