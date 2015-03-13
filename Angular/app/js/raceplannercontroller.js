'use strict';

angular.module('angularProject')
    .config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    .controller('raceplanCtrl', function ($scope, Auth, $http, $cookies, $location, $filter) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

        $scope.logout = function(){
            Auth.logout();
            $location.path('/home');
        };

        $scope.raceDistances = [
            {distance: 3.107, name:'5K'},
            {distance: 6.214, name: '10K'},
            {distance: 13.1, name: 'Half Marathon'},
            {distance: 26.2, name: 'Marathon'},
            {distance: 31.069, name: '50K'},
            {distance: 62.137, name: '100K'},
            {distance: 100.0, name: '100 Miles'}
        ];

        $scope.createPlan = function(){
            var data = {
                'event':$scope.formPlanEvent,
                'date':$scope.formPlanDate.getFullYear() + '-' + ($scope.formPlanDate.getMonth() + 1) + '-' + $scope.formPlanDate.getDate(),
                'distance':$scope.formPlanDistance,
                'finishTime':secstoTime($scope.formPlanFinishTime),
                'location':$scope.formPlanLocation
            };

            $http.post('http://localhost:8001/races/create/', data).
            success(function(data){
                $scope.races.push({event:data.event, date:data.date, distance:data.distance, finishTime:data.finishTime, location:data.location});
                $scope.formPlanEvent = '';
                $scope.formPlanDate = '';
                $scope.formPlanDistance = '';
                $scope.formPlanFinishTime = '';
                $scope.formPlanLocation = '';
                $location.path('/raceplan');
            }).
            error(function(data){
                $scope.error = ['Error adding new plan'];
                console.log('error' + data.error);
            });
        };

        var racesRequest = $http.get('http://localhost:8001/races/athlete/upcoming/');
        racesRequest.success(function(data){
            console.log('success' + data);
            $scope.races=data;
        });
        racesRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });


    });
