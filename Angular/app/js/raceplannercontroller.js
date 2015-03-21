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

            var geoCoder = new google.maps.Geocoder();
            geoCoder.geocode (
                { address: data.location },
                function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var newAddress = results[0].geometry.location;
                        data.latitude = parseFloat(newAddress.lat());
                        data.longitude = parseFloat(newAddress.lng());
                        $http.post(constants.serverAddress + 'races/create/', data).
                        success(function(data){
                            $scope.races.push(
                                {
                                    event:data.event,
                                    date:data.date,
                                    distance:data.distance,
                                    finishTime:data.finishTime,
                                    location:data.location,
                                    latitude:data.latitude,
                                    longitude:data.longitude
                                });
                            $scope.formRaceEvent = '';
                            $scope.formRaceDate = '';
                            $scope.formRaceDistance = '';
                            $scope.formRaceFinishTime = '';
                            $scope.formRaceLocation = '';
                            $location.path('/raceplan');
                        }).
                        error(function(data){
                            $scope.error = ['Error adding new plan'];
                            console.log('error' + data.error);
                        });
                    } else {
                        $scope.error = ['Error adding new plan. Bad Location.'];
                        console.log('error' + data.error);
                    }
            });
        };

        $scope.removePlan = function(race){
            $http.delete(constants.serverAddress + 'races/race/' + race.id + '/').
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

        var racesRequest = $http.get(constants.serverAddress + 'races/athlete/upcoming/');
        racesRequest.success(function(data){
            console.log('success' + data);
            $scope.races=data;
        });
        racesRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });


    });
