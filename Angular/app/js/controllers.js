'use strict';

var controllersModule = angular.module('angularProject.controllers', []) 

    .controller('homeCtrl', function($scope, Auth, User, Address, $location) {

      $scope.users = User.query();
      $scope.addresses = Address.query();


      $scope.logout = function(){
          Auth.logout();
          $location.path('/home');
      }

})

    .controller('registerCtrl', function($scope, Auth, $http, $cookies, User, $location) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

    $scope.registration = function(){
    var data = {
        'username': $scope.formUsername,
        'first_name': $scope.formFirstName,
        'last_name': $scope.formLastName,
        'email': $scope.formEmail,
        'password1': $scope.formPassword1,
        'password2': $scope.formPassword2
    };
        $http.post('http://localhost:8001/users', data).
        success(function(data){
                $scope.users.push({username:data.username, first_name:data.first_name, last_name:data.last_name, email:data.email, password1:data.password1, password2:data.password2});
                $scope.formUsername = '';
                $scope.formFirstName = '';
                $scope.formLastName = '';
                $scope.formEmail = '';
                $scope.formPassword1 = '';
                $scope.formPassword2 = '';
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

    .controller('profileCtrl', function($scope, Auth, User, $location) {
      $scope.logout = function(){
      Auth.logout();
      $location.path('/home');
      }
})

    .controller('racefinderCtrl', function($scope, Auth, $location) {
      $scope.logout = function(){
      Auth.logout();
      $location.path('/home');
      }
})

    .controller('loginCtrl', function($scope, Auth) {

    })

    .controller('raceplanCtrl', function($scope, Auth, $location) {
      $scope.logout = function(){
      Auth.logout();
      $location.path('/home');
      }
});
