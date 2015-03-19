'use strict';

angular.module('angularProject')
    .config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    .controller('racedetailCtrl', function ($scope, $routeParams, $http, Auth, $cookies, $location, $filter) {
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
            if($scope.race.distance==100) $scope.race.distance = $scope.race.distance.toFixed(1);//hack for dropped decimal
            $scope.race.finishTime = $filter("date")($scope.race.finishTime*1000, 'H:mm:ss','UTC');
            $scope.race.date = new Date(Date.parse($scope.race.date + " PDT")); //todo: avoid hardcoded Timezone
        });

        $scope.updateRace = function() {
            var url = 'http://localhost:8001/races/generics/id/' + $routeParams.raceId + '/';
            var data = {
                'event':$scope.race.event,
                'date':$scope.race.date.getFullYear() + '-' + ($scope.race.date.getMonth() + 1) + '-' + $scope.race.date.getDate(),
                'distance':$scope.race.distance,
                'bibNumber':$scope.race.bibNumber,
                'finishTime':secstoTime($scope.race.finishTime),
                'totalinRace':$scope.race.totalinRace,
                'overallPlace':$scope.race.overallPlace,
                'totalinGender':$scope.race.totalinGender,
                'genderPlace':$scope.race.genderPlace,
                'totalinDivision':$scope.race.totalinDivision,
                'divisionPlace':$scope.race.divisionPlace,
                'location':$scope.race.location
            };
            var geoCoder = new google.maps.Geocoder();
            geoCoder.geocode (
                { address: data.location },
                function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var newAddress = results[0].geometry.location;
                        data.latitude = parseFloat(newAddress.lat());
                        data.longitude = parseFloat(newAddress.lng());
                        $http.put(url, data).
                        success(function(data){
                            console.log("Success" + data);
                            $location.path('/racekeeper');
                            }).
                        error(function(data) {
                            console.log("Error" + data);
                        });
                    } else {
                        $scope.error = ['Error updating race. Bad Location.'];
                        console.log('error' + data.error);
                    }
            });
        };

        $scope.logout = function(){
            Auth.logout();
            $location.path('/home');
        };

    });

