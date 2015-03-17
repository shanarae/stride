'use strict';

var controllersModule = angular.module('angularProject.controllers', []) 

    .controller('homeCtrl', function($scope, $http, Auth, User, Address, $location) {

      $scope.users = User.query();
      $scope.addresses = Address.query();

      $scope.logout = function(){
          Auth.logout();
          $location.path('/home');
      };

        var detailsRequest = $http.get('http://localhost:8001/users/myprofile/');
        detailsRequest.success(function (data) {
            console.log('success' + data);
            $scope.details = data;
        });
        detailsRequest.error(function (data) {
            $scope.error = ['Error with user details.'];
            console.log('error' + data);
        });
})

    .controller('registerCtrl', function($scope, Auth, $http, $cookies, $location, $cookieStore, authService) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

    $scope.register = function(){
    var data = {
        'username': $scope.formUsername,
        'first_name': $scope.formFirstName,
        'last_name': $scope.formLastName,
        'email': $scope.formEmail,
        'password': $scope.formPassword1
    };
        $http.post('http://localhost:8001/register', data).
        success(function(data){
                var user_data = {
		                "username": $scope.formUsername,
		                "password": $scope.formPassword1
		            };
                $scope.formUsername = '';
                $scope.formFirstName = '';
                $scope.formLastName = '';
                $scope.formEmail = '';
                $scope.formPassword1 = '';
                $scope.formPassword2 = '';

                //$http.post(constants.serverAddress + "api-token-auth", user_data)
                $http.post("http://localhost:8001/api-token-auth/", user_data)
                    .success(function(response) {
                        $cookieStore.put('djangotoken', response.token);
                        $http.defaults.headers.common['Authorization'] = 'Token ' + response.token;
                        authService.loginConfirmed();
                        alert("Thank you for registering!");
                        $location.path('/racekeeper');
                });
            }).

        error(function(data){
            $scope.error = ['Error adding new user'];
            console.log('error' + data.error);
            });
        };

      $scope.logout = function(){
      Auth.logout();
      $location.path('/home');
      }
})

    .controller('racefinderCtrl', function($scope, Auth, $http, $cookies, $location) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

      $scope.logout = function(){
      Auth.logout();
      $location.path('/home');
      };

      var cities = $http.get('http://localhost:8001/races/athlete/locations/');
        cities.success(function(data) {
            console.log('success' + data);
            scope.cities=data;
        });
        cities.error(function(data) {
            scope.error= ['Error with cities.'];
            console.log('error' + data);
        });


})

    .controller('loginCtrl', function($scope, Auth) {

    });

