'use strict';

angular.module('myApp.apiserver', [])

.factory("kubeapi", function($http) {

  var APISERVER = "https://146.148.7.28";
  var TOKEN = "ya29.CjBWAxsnKXqgbLxg6uxBBXYJnPy9f_qyAUferCFcK3t40P51-sqCbA_xgotUXhya560";

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
