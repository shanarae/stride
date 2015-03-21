'use strict';

angular.module('angularProject')
    .config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    .controller('editprofileCtrl', function ($http, $scope, $routeParams, Auth, $cookies, $location) {
        $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
        $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
        $http.defaults.xsrfCookieName = 'csrftoken';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';

        $scope.logout = function () {
            Auth.logout();
            $location.path('/home');
        };

        $http.get(constants.serverAddress + 'users/' + $routeParams.userId).success(function(data) {
            $scope.user = data;
        });

        $scope.updateProfile = function() {
            var url = constants.serverAddress + 'users/' + $routeParams.userId;
            var data = {
                'username':$scope.user.username,
                'first_name':$scope.user.first_name,
                'last_name':$scope.user.last_name,
                'email':$scope.user.email,
                'last_login':$scope.user.last_login,
                'date_joined':$scope.user.date_joined
            };
            $http.put(url, data).
            success(function(data){
                console.log("Success" + data);
                $location.path('/profile');
                }).
            error(function(data) {
                console.log("Error" + data);
            });
        };

    });
