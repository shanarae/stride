'use strict';

var DATA_TABLE = {
    3.107 : {
        1 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 8x400 at target pace w/1 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 2 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "5 miles @ target pace"}
        },
        2 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 5x800 at target pace w/1 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 3 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "6 miles @ target pace"}
        },
        3 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 2x1600 at target pace w/2 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 4 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "5 miles @ target pace"}
        },
        4 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 4x1000 at target pace w/1 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 4 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "6 miles @ target pace"}
        },
        5 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 4x1000 at target pace w/1 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 3 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "7 miles @ target pace"}
        },
        6 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 2x1600 at target pace w/2 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 5 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "6 miles @ target pace"}
        },
        7 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 10x400 at target pace w/1 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 4 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "8 miles @ target pace"}
        },
        8 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 6x800 at target pace w/2 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 5 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "7 miles @ target pace"}
        },
        9 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 4x1200 at target pace w/2 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 3 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "7 miles @ target pace"}
        },
        10 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 5x1000 at target pace w/1 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 7 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "7 miles @ target pace"}
        },
        11 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 3x1600 at target pace w/1 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 3 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.2 , description: "6 miles @ target pace"}
        },
        12 : {
            SPRINT : {paceMultiple:.75 , description: "10-20 min warmup, 6x400 at target pace w/1 min jogging in between, 10 min cooldown"},
            TEMPO : {paceMultiple:.8 , description: "1 mile warmup, 3 miles @ target pace, 1 mile cooldown"},
            LONG: {paceMultiple:1.0 , description: "RACE DAY! Good luck!"}
        }
    },
    6.214 : {
        1 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        2 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        3 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        4 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        5 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        6 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        7 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        8 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        9 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        10 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        11 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        12 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        }
    },
    13.1 : {
        1 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        2 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        3 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        4 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        5 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        6 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        7 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        8 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        9 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        10 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        11 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        12 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        13 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        14 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        15 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        16 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        17 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        18 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        }
    },
    26.2 : {
        1 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        2 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        3 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        4 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        5 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        6 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        7 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        8 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        9 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        10 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        11 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        12 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        13 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        14 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        15 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        },
        16 : {
            SPRINT : {paceMultiple:.8 , description: "describe sprint 1"},
            TEMPO : {paceMultiple:.8 , description: "describe sprint 1"},
            LONG: {paceMultiple:.8 , description: "describe sprint 1"}
        }
    }
};

var TYPE = {
    REST : "Rest Day",
    RUN : "Run Workout",
    CROSS : "Cross Train Workout"
};

//var Race = function(name, date, distance, pace) {
//    this.date = new Date(Date.parse(date));
//    this.pace = pace;
//    this.distance = distance;
//    this.name = name;
//};

var Workout = function(type, description, pace) {
    this.type = type;
    this.description = description;
    this.pace = pace;
};

var createRunWorkout = function(runType, planLength, weekNumber, racePace, raceDistance) {
    var lookupDistance = DATA_TABLE[raceDistance] || {};
    var lookupWeek = lookupDistance[weekNumber] || {};
    var lookupRun = lookupWeek[runType] || {};
    var description = lookupRun.description || "Basic Run";
    var lookupPace = lookupRun.paceMultiple || 1;
    return new Workout(TYPE.RUN, description, lookupPace * racePace );
};

var Plan = function(race) {
    this.race = race;
    //construct the schedule
    this.weeks = buildPlan(race);
};

var buildPlan = function(race) {
    var weeks = [];
    var planLength;
    if (race.distance===3.107) {
        planLength = 12;
    } else if (race.distance===6.214) {
        planLength = 12;

    } else if (race.distance===13.1) {
        planLength = 18;

    } else {
        planLength = 16;
        race.distance=26.2;
    }
    var planStartDate = new Date(Date.parse(race.date));
    planStartDate.setDate(planStartDate.getDate()-planLength*7);

    for (var i=0; i<planLength; i++) {

        var days = [
            {workout: new Workout(TYPE.REST)},
            {workout: new Workout(TYPE.CROSS)},
            {workout: createRunWorkout("SPRINT", planLength, i+1, race.pace, race.distance)},
            {workout: new Workout(TYPE.CROSS)},
            {workout: new Workout(TYPE.REST)},
            {workout: createRunWorkout("TEMPO", planLength, i+1, race.pace, race.distance)},
            {workout: createRunWorkout("LONG", planLength, i+1, race.pace, race.distance)}
        ];

        weeks.push({
            weekStartDate : new Date(planStartDate.getTime()),
            days : days
        });

        planStartDate.setDate(planStartDate.getDate() + 7);
    }
    return weeks;
};

angular.module('angularProject')
    .config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    .controller('raceplandetailCtrl', function ($scope, $routeParams, $http, Auth, $cookies, $location) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

        $http.get('http://localhost:8001/races/generics/id/' + $routeParams.raceId + '/').success(function(data) {
            $scope.race = data;
            $scope.plan = new Plan(data);
            console.log(JSON.stringify($scope.plan));
        });

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


    });
