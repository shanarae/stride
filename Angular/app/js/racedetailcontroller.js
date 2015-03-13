'use strict';

angular.module('angularProject')
    .config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    .controller('racedetailCtrl', function ($scope, $routeParams, $http, Auth, $cookies, $location) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

        $scope.raceDistances = [
            {distance: 3.107, name:'5K'},
            {distance: 6.214, name: '10K'},
            {distance: 13.1, name: 'Half Marathon'},
            {distance: 26.2, name: 'Marathon'},
            {distance: 31.069, name: '50K'},
            {distance: 62.137, name: '100K'},
            {distance: 100.0, name: '100 Miles'}
        ];

        $http.get('http://localhost:8001/races/generics/id/' + $routeParams.raceId + '/').success(function(data) {
            $scope.race = data;
        });

        $scope.updateRace = function() {
            var url = 'http://localhost:8001/races/generics/id/' + $routeParams.raceId + '/';
            var data = {
                'event':$scope.race.event,
                'date':$scope.race.date,
                'distance':$scope.race.distance,
                'bibNumber':$scope.race.bibNumber,
                'finishTime':$scope.race.finishTime,
                'totalinRace':$scope.race.totalinRace,
                'overallPlace':$scope.race.overallPlace,
                'totalinGender':$scope.race.totalinGender,
                'genderPlace':$scope.race.genderPlace,
                'totalinDivision':$scope.race.totalinDivision,
                'divisionPlace':$scope.race.divisionPlace,
                'location':$scope.race.location
            };
            $http.put(url, data).
            success(function(data){
                console.log("Success" + data);
                $location.path('/racekeeper');
                }).
            error(function(data) {
                console.log("Error" + data);
            });
        };

        $scope.logout = function(){
            Auth.logout();
            $location.path('/home');
        };

    });

