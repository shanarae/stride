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
    .config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    .filter('pace', function(){
        return function(input) {
            input = input || '';
            //var out = '';
            //input will be like 5.2, which is 5:12
            //how you get that is take the number before the . as the first part
            //then take the decimal part and multiple by 60
            //then concatenate the first part:last part
            input += "";
            input = input.indexOf('.')>0 ? input : input + ".0";
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
            if(!input) return;
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

    .controller('racekeeperCtrl', function ($http, $scope, Auth, $cookies, $location, $filter) {
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

        var racesRequest = $http.get(constants.serverAddress + 'races/athlete/');
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
                'divisionPlace':$scope.formRaceDivisionPlace,
                'location':$scope.formRaceLocation
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
                                    bibNumber:data.bibNumber,
                                    finishTime:data.finishTime,
                                    totalinRace:data.totalinRace,
                                    overallPlace:data.overallPlace,
                                    totalinGender:data.totalinGender,
                                    genderPlace:data.genderPlace,
                                    totalinDivision:data.totalinDivision,
                                    divisionPlace:data.divisionPlace,
                                    location:data.location,
                                    latitude:data.latitude,
                                    longitude:data.longitude
                                });
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
                            $scope.formRaceLocation = '';
                            $location.path('/racekeeper/raceanalysis');
                        }).
                        error(function(data){
                            $scope.error = ['Error adding new race'];
                            console.log('error' + data.error);
                        });
                    } else {
                        $scope.error = ['Error adding new race. Bad Location.'];
                        console.log('error' + data.error);
                    }
            });
        };

        $scope.removeRace = function(race){
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

        var fivesRequest = $http.get(constants.serverAddress + 'races/athlete/5K/');
        fivesRequest.success(function(data){
            console.log('success' + data);
            $scope.fives=data;
        });
        fivesRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });

        $scope.getTotalFives = function(){
            return $scope.fives ? $scope.fives.length : 0;
        };


        var tensRequest = $http.get(constants.serverAddress + 'races/athlete/10K/');
        tensRequest.success(function(data){
            console.log('success' + data);
            $scope.tens=data;
        });
        tensRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });

        $scope.getTotalTens = function(){
            return $scope.tens ? $scope.tens.length : 0;
        };


        var halfsRequest = $http.get(constants.serverAddress + 'races/athlete/Half/');
        halfsRequest.success(function(data){
            console.log('success' + data);
            $scope.halfs=data;
        });
        halfsRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });

        $scope.getTotalHalfs = function(){
            return $scope.halfs ? $scope.halfs.length : 0;
        };


        var marathonsRequest = $http.get(constants.serverAddress + 'races/athlete/Marathon/');
        marathonsRequest.success(function(data){
            console.log('success' + data);
            $scope.marathons=data;
        });
        marathonsRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });

        $scope.getTotalMarathons = function(){
            return $scope.marathons ? $scope.marathons.length : 0;
        };


        var fiftiesRequest = $http.get(constants.serverAddress + 'races/athlete/50K/');
        fiftiesRequest.success(function(data){
            console.log('success' + data);
            $scope.fifties=data;
        });
        fiftiesRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });

        $scope.getTotalFifties = function(){
            return $scope.fifties ? $scope.fifties.length : 0;
        };


        var hunkaysRequest = $http.get(constants.serverAddress + 'races/athlete/100K/');
        hunkaysRequest.success(function(data){
            console.log('success' + data);
            $scope.hunkays=data;
        });
        hunkaysRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });

        $scope.getTotalHunkays = function(){
            return $scope.hunkays ? $scope.hunkays.length : 0;
        };


        var hunmilesRequest = $http.get(constants.serverAddress + 'races/athlete/100M/');
        hunmilesRequest.success(function(data){
            console.log('success' + data);
            $scope.hunmiles=data;
        });
        hunmilesRequest.error(function(data){
            $scope.error = ['Error with races.'];
            console.log('error' + data);
        });

        $scope.getTotalHunmiles = function(){
            return $scope.hunmiles ? $scope.hunmiles.length : 0;
        };

//Original example to understand how chart works
        //$scope.chart = null;
        //
        //$scope.showGraph = function() {
        //    $scope.chart = c3.generate({
        //        bindto: '#chart',
        //        data: {
        //            columns: [
        //                ['x', 30, 50, 100, 230, 300, 310],
        //                ['data1', 30, 200, 100, 400, 150, 250],
        //                ['data2', 130, 300, 200, 300, 250, 450]
        //            ]
        //        }
        //    });
        //};

        $scope.processData = function(input) {
            //input
            //[{
            //                "event": "My first 100K",
            //                "date": "2014-12-31",
            //                "distance": 62.137,
            //                "distanceLabel": "5k",
            //                "finishTime": 39659,
            //                "pace": 10.63751602641475
            //            }];
                //output
                //"5k" : {
                //          dates:[date, date2]
                //          paces:[pace, pace2]
                //},
                //"10k" : {...}

            var data = {};
            for (var i=0; i<input.length; i++) {
                var distanceLabel = input[i].distanceLabel;
                var pace = input[i].pace;
                var date = input[i].date;
                if (!data.hasOwnProperty(distanceLabel)) {
                    data[distanceLabel] = {
                        dates:[],
                        paces:[]
                    }
                }
                data[distanceLabel].dates.push(date);
                data[distanceLabel].paces.push(pace);
            }


            //output
            // var bar  = {
            //            xs: {
            //                'data1': 'x1',
            //                'data2': 'x2'
            //            },
            //            columns: [
            //                ['x1', '2001-1-1', '2002-1-1', '2003-1-1', '2004-1-1', '2005-1-1', '2006-1-1'],
            //                ['x2', '2003-3-3', '2005-4-1', '2015-1-1', '2013-3-3', '2014-1-1', '2006-1-2'],
            //                ['data1', 7.07, 7.37, 7.18, 7.01, 7.06, 7.59],
            //                ['data2', 7.44, 7.55, 7.22, 7.17, 7.49, 7.47]
            //            ]
            //        };

            var processedData = {
                xs: {},
                columns: [],
                names: {}
            };
            var numberRows = Object.keys(data).length;
            var rowNumber = 1;
            for(distanceLabel in data) {
                //name the keys for the data
                var dName = "data" + rowNumber;
                var xName = "x" + rowNumber;
                processedData.xs[dName] = xName;
                processedData.names[dName] = distanceLabel;
                //put the column data in
                var dates = data[distanceLabel].dates;
                var paces = data[distanceLabel].paces;

                processedData.columns[rowNumber-1] = [xName];
                Array.prototype.push.apply(processedData.columns[rowNumber-1], dates);
                processedData.columns[rowNumber-1+numberRows] = [dName];
                Array.prototype.push.apply(processedData.columns[rowNumber-1+numberRows], paces);
                rowNumber++;
            }
            return processedData;
        };

        $scope.racechart = null;

        $scope.showraceGraph = function() {
            var racegraphRequest = $http.get(constants.serverAddress + 'races/athlete/');
            racegraphRequest.success(function(data){
                console.log('success' + data);
                 $scope.racechart = c3.generate({
                    bindto: '#racechart',
                    data: $scope.processData(data),
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                fit: false,
                                format: '%e %b %y'
                            }
                        },
                        y: {
                            min: 4,
                            tick: {
                                format: function(value){
                                    return $filter('pace')(value);
                                }
                            }
                        }
                    },
                    tooltip: {
                        format: function(value){
                            return $filter('pace')(value);
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    padding: {
                        top: 25,
                        right: 25,
                        bottom: 25,
                        left: 55
                    },
                     point: {
                         r: 4
                     }
                });
            });

            racegraphRequest.error(function(data){
                $scope.error = ['Error with graph.'];
                console.log('error' + data);
            });
        };

        $scope.race5Kchart = null;

        $scope.showrace5KGraph = function() {
            var racegraph5KRequest = $http.get(constants.serverAddress + 'races/athlete/5K/');
            racegraph5KRequest.success(function(data){
                console.log('success' + data);
                 $scope.race5Kchart = c3.generate({
                    bindto: '#race5Kchart',
                    data: $scope.processData(data),
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                fit: false,
                                format: '%e %b %y'
                            }
                        },
                        y: {
                            min: 4,
                            tick: {
                                format: function(value){
                                    return $filter('pace')(value);
                                }
                            }
                        }
                    },
                    tooltip: {
                        format: function(value){
                            return $filter('pace')(value);
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    padding: {
                        top: 25,
                        right: 25,
                        bottom: 25,
                        left: 55
                    },
                     point: {
                         r: 4
                     }
                });
            });

            racegraph5KRequest.error(function(data){
                $scope.error = ['Error with graph.'];
                console.log('error' + data);
            });
        };

        $scope.race10Kchart = null;

        $scope.showrace10KGraph = function() {
            var racegraph10KRequest = $http.get(constants.serverAddress + 'races/athlete/10K/');
            racegraph10KRequest.success(function(data){
                console.log('success' + data);
                 $scope.race10Kchart = c3.generate({
                    bindto: '#race10Kchart',
                    data: $scope.processData(data),
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                fit: false,
                                format: '%e %b %y'
                            }
                        },
                        y: {
                            min: 4,
                            tick: {
                                format: function(value){
                                    return $filter('pace')(value);
                                }
                            }
                        }
                    },
                    tooltip: {
                        format: function(value){
                            return $filter('pace')(value);
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    padding: {
                        top: 25,
                        right: 25,
                        bottom: 25,
                        left: 55
                    },
                     point: {
                         r: 4
                     }
                });
            });

            racegraph10KRequest.error(function(data){
                $scope.error = ['Error with graph.'];
                console.log('error' + data);
            });
        };

        $scope.raceHalfchart = null;

        $scope.showraceHalfGraph = function() {
            var racegraphHalfRequest = $http.get(constants.serverAddress + 'races/athlete/Half/');
            racegraphHalfRequest.success(function(data){
                console.log('success' + data);
                 $scope.raceHalfchart = c3.generate({
                    bindto: '#raceHalfchart',
                    data: $scope.processData(data),
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                fit: false,
                                format: '%e %b %y'
                            }
                        },
                        y: {
                            min: 4,
                            tick: {
                                format: function(value){
                                    return $filter('pace')(value);
                                }
                            }
                        }
                    },
                    tooltip: {
                        format: function(value){
                            return $filter('pace')(value);
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    padding: {
                        top: 25,
                        right: 25,
                        bottom: 25,
                        left: 55
                    },
                     point: {
                         r: 4
                     }
                });
            });

            racegraphHalfRequest.error(function(data){
                $scope.error = ['Error with graph.'];
                console.log('error' + data);
            });
        };

        $scope.raceMarathonchart = null;

        $scope.showraceMarathonGraph = function() {
            var racegraphMarathonRequest = $http.get(constants.serverAddress + 'races/athlete/Marathon/');
            racegraphMarathonRequest.success(function(data){
                console.log('success' + data);
                 $scope.raceMarathonchart = c3.generate({
                    bindto: '#raceMarathonchart',
                    data: $scope.processData(data),
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                fit: false,
                                format: '%e %b %y'
                            }
                        },
                        y: {
                            min: 4,
                            tick: {
                                format: function(value){
                                    return $filter('pace')(value);
                                }
                            }
                        }
                    },
                    tooltip: {
                        format: function(value){
                            return $filter('pace')(value);
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    padding: {
                        top: 25,
                        right: 25,
                        bottom: 25,
                        left: 55
                    },
                     point: {
                         r: 4
                     }
                });
            });

            racegraphMarathonRequest.error(function(data){
                $scope.error = ['Error with graph.'];
                console.log('error' + data);
            });
        };

        $scope.race50Kchart = null;

        $scope.showrace50KGraph = function() {
            var racegraph50KRequest = $http.get(constants.serverAddress + 'races/athlete/50K/');
            racegraph50KRequest.success(function(data){
                console.log('success' + data);
                 $scope.race50Kchart = c3.generate({
                    bindto: '#race50Kchart',
                    data: $scope.processData(data),
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                fit: false,
                                format: '%e %b %y'
                            }
                        },
                        y: {
                            min: 4,
                            tick: {
                                format: function(value){
                                    return $filter('pace')(value);
                                }
                            }
                        }
                    },
                    tooltip: {
                        format: function(value){
                            return $filter('pace')(value);
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    padding: {
                        top: 25,
                        right: 25,
                        bottom: 25,
                        left: 55
                    },
                     point: {
                         r: 4
                     }
                });
            });

            racegraph50KRequest.error(function(data){
                $scope.error = ['Error with graph.'];
                console.log('error' + data);
            });
        };

        $scope.race100Kchart = null;

        $scope.showrace100KGraph = function() {
            var racegraph100KRequest = $http.get(constants.serverAddress + 'races/athlete/100K/');
            racegraph100KRequest.success(function(data){
                console.log('success' + data);
                 $scope.race100Kchart = c3.generate({
                    bindto: '#race100Kchart',
                    data: $scope.processData(data),
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                fit: false,
                                format: '%e %b %y'
                            }
                        },
                        y: {
                            min: 4,
                            tick: {
                                format: function(value){
                                    return $filter('pace')(value);
                                }
                            }
                        }
                    },
                    tooltip: {
                        format: function(value){
                            return $filter('pace')(value);
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    padding: {
                        top: 25,
                        right: 25,
                        bottom: 25,
                        left: 55
                    },
                     point: {
                         r: 4
                     }
                });
            });

            racegraph100KRequest.error(function(data){
                $scope.error = ['Error with graph.'];
                console.log('error' + data);
            });
        };

        $scope.race100Mchart = null;

        $scope.showrace100MGraph = function() {
            var racegraph100MRequest = $http.get(constants.serverAddress + 'races/athlete/100M/');
            racegraph100MRequest.success(function(data){
                console.log('success' + data);
                 $scope.race100Mchart = c3.generate({
                    bindto: '#race100Mchart',
                    data: $scope.processData(data),
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                fit: false,
                                format: '%e %b %y'
                            }
                        },
                        y: {
                            min: 4,
                            tick: {
                                format: function(value){
                                    return $filter('pace')(value);
                                }
                            }
                        }
                    },
                    tooltip: {
                        format: function(value){
                            return $filter('pace')(value);
                        }
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    padding: {
                        top: 25,
                        right: 25,
                        bottom: 25,
                        left: 55
                    },
                     point: {
                         r: 4
                     }
                });
            });

            racegraph100MRequest.error(function(data){
                $scope.error = ['Error with graph.'];
                console.log('error' + data);
            });
        }

    });
