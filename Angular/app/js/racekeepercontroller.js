'use strict';

var secstoTime = function(input) {
    var finishTime = 0;
    var finishTimeParts = input.split(':');
    if (finishTimeParts.length>2) {
    // ex 3:45:55
        finishTime = (60 * 60 * finishTimeParts[0]) + (60 * finishTimeParts[1]) + (finishTimeParts[2]*1);
    } else if (finishTimeParts.length>1) {
    // ex 45:00
        finishTime = (60 * finishTimeParts[0]) + (finishTimeParts[1]*1);
    } else {
    //ex 44
        finishTime = finishTimeParts[0]*1;
    }
    return finishTime;
    };

angular.module('angularProject')
    .config(function($httpProvider , $interpolateProvider, $resourceProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //** django urls loves trailling slashes which angularjs removes by default.
    //$resourceProvider.defaults.stripTrailingSlashes = false;
    })

    .filter('pace', function(){
        return function(input) {
            input = input || '';
            //var out = '';
            //input will be like 5.2, which is 5:12
            //how you get that is take the number before the . as the first part
            //then take the decimal part and multiple by 60
            //then concatenate the first part:last part
            input = input + '';
            var firstPart = input.substr(0,input.indexOf('.'));
            var secondPartString = input.substr(input.indexOf('.')) || '00';
            var secondPart = Math.round(secondPartString * 60);
            secondPart = secondPart > 9 ? '' + secondPart : '0' + secondPart;
            return firstPart + ':' + secondPart;
        };
    })
    .filter('secstoHours', function(){

        return function(input, places) {
            input *= 100;
            return input.toFixed(places || 0);
        };
    })
    .filter('secstoTime', function(){

        return function(input) {
            var finishTime = 0;
            var finishTimeParts = input.split(':');
            if (finishTimeParts.length>2) {
                // ex 3:45:55
                finishTime = 60 * 60 * finishTimeParts[0] + 60 * finishTimeParts[1] + finishTimeParts[2];
            } else if (finishTimeParts.length>1) {
                // ex 45:00
                finishTime = 60 * finishTimeParts[0] + finishTimeParts[1];
            } else {
                //ex 44
                finishTime = finishTimeParts[0];
            }
            return finishTime;
        };
    })

    //.config(['$httpProvider', function($httpProvider) {
    //    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    //    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //}])
    .controller('racekeeperCtrl', function ($scope, Auth, $http, $cookies, $location) {
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
            {distance: 100, name: '100 Miles'}
        ];

        var racesRequest = $http.get('http://localhost:8001/races/athlete/');
        racesRequest.success(function(data){
            console.log('success' + data);
            $scope.races=data;
        });
        racesRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });

        $scope.getTotalRaces = function(){
            return $scope.races ? $scope.races.length : 0;
        };

        $scope.addRace = function(){
            var data = {
                'event':$scope.formRaceEvent,
                'date':$scope.formRaceDate.getFullYear() + '-' + ($scope.formRaceDate.getMonth() + 1) + '-' + $scope.formRaceDate.getDate(),
                'distance':$scope.formRaceDistance,
                'bibNumber':$scope.formRaceBibNumber,
                'finishTime':secstoTime($scope.formRaceFinishTime),
                'totalinRace':$scope.formRaceTotalinRace,
                'overallPlace':$scope.formRaceOverallPlace,
                'totalinGender':$scope.formRaceTotalinGender,
                'genderPlace':$scope.formRaceGenderPlace,
                'totalinDivision':$scope.formRaceTotalinDivision,
                'divisionPlace':$scope.formRaceDivisionPlace
            };

            $http.post('http://localhost:8001/races/create/', data).
            success(function(data){
                $scope.races.push({event:data.event, date:data.date, distance:data.distance, bibNumber:data.bibNumber, finishTime:data.finishTime, totalinRace:data.totalinRace, overallPlace:data.overallPlace, totalinGender:data.totalinGender, genderPlace:data.genderPlace, totalinDivision:data.totalinDivision, divisionPlace:data.divisionPlace});
                $scope.formRaceEvent = '';
                $scope.formRaceDate = '';
                $scope.formRaceDistance = '';
                $scope.formRaceBibNumber = '';
                $scope.formRaceFinishTime = '';
                $scope.formRaceTotalinRace = '';
                $scope.formRaceOverallPlace = '';
                $scope.formRaceTotalinGender = '';
                $scope.formRaceGenderPlace = '';
                $scope.formRaceTotalinDivision = '';
                $scope.formRaceDivisionPlace = '';
                $location.path('/racekeeper');
            }).
            error(function(data){
                $scope.error = ['Error adding new race'];
                console.log('error' + data.error);
            });
        };

        $scope.removeRace = function(race){
            $http.delete('http://localhost:8001/races/race/'+ race.id + '/').
            success(function(data){
                   $scope.races.splice(
                    $scope.races.indexOf(race),
                    1
                );
            }).
            error(function(data){
                $scope.error = ['Error deleting race'];
                console.log('error' + data.error);
            });

        };

    });

