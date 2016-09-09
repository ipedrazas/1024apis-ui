'use strict';

angular.module('myApp.apiserver', [])

.factory("kubeapi", function($http) {

  var APISERVER = "https://23.251.130.232";
  var TOKEN = "ya29.CjBZA2S5fsImnGr6tBVe8ftaJoH7Vka0TfHj9fu68S8cufDG8oZ8U3cVt7OeHdeImfs";

  var getAllPods = function(){
    return $http.get( APISERVER + '/api/v1/pods', {headers: {'Authorization': 'Bearer '+TOKEN}});

  };

  var getNamespaces = function(){
    return $http.get( APISERVER + '/api/v1/namespaces', {headers: {'Authorization': 'Bearer '+TOKEN}});
  };

  var getPod = function(namespace){
    return $http.get( APISERVER + '/api/v1/namespaces/'+namespace+'/pods', {headers: {'Authorization': 'Bearer '+TOKEN}});
  }

  var getNodes = function(){
    return $http.get( APISERVER + '/api/v1/nodes', {headers: {'Authorization': 'Bearer '+TOKEN}});
  }

  return {
    getAllPods: getAllPods,
    getNamespaces: getNamespaces,
    getPod: getPod,
    getNodes: getNodes,
  };
});
