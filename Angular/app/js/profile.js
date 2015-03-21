'use strict';

angular.module('angularProject')
    .config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    .controller('profileCtrl', function ($http, $scope, Auth, $cookies, $location) {
        $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
        $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
        $http.defaults.xsrfCookieName = 'csrftoken';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';

        $scope.logout = function () {
            Auth.logout();
            $location.path('/home');
        };

        var detailsRequest = $http.get(constants.serverAddress + 'users/myprofile/');
        detailsRequest.success(function (data) {
            console.log('success' + data);
            $scope.details = data;
        });
        detailsRequest.error(function (data) {
            $scope.error = ['Error with user details.'];
            console.log('error' + data);
        });

    });
