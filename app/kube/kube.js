'use strict';

var module = angular.module('myApp.kube', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kube', {
    templateUrl: 'kube/kube.html',
    controller: 'KubeCtrl'
  });
}])


.controller('KubeCtrl', ['$scope', 'kubeapi', '$interval', function($scope, kubeapi, $interval) {

  $interval(function(){
    kubeapi.getNodes().then(function(resp){
      var nodes = resp.data.items;
      nodes.total = nodes.length;
      $scope.nodes = nodes;
      console.log(resp);
    });
  }, 5000);
  $interval(function(){
    kubeapi.getNamespaces().then(function(response){
      var namespaces = [];
      $scope.namespaces = namespaces;

      _.each(response.data.items, function(item){
        var ns = {};
        ns.name = item.metadata.name;
        namespaces.push(ns);
        kubeapi.getPod(item.metadata.name).then(function(resp){
          ns.count = resp.data.items.length;
          ns.pending = 0;
          ns.running = 0;
          ns.failed = 0;
          _.each(resp.data.items, function(pod){
            if(pod.status.phase==='Pending'){
              ns.pending++;
            }
            if(pod.status.phase==='Running'){
              ns.running++;
            }
            if(pod.status.phase==='Failed'){
              ns.failed++;
            }

          });
          console.log(resp.data);
        });
      });
    });
  },3000);




}]);
