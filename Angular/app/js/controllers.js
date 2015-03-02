'use strict';

var controllersModule = angular.module('angularProject.controllers', []) 

    .controller('homeCtrl', function($scope, Auth, User, Address) {

      $scope.users = User.query();
      $scope.addresses = Address.query();

      $scope.logout = function(){
          Auth.logout();
      }

});
