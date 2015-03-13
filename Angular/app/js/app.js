'use strict';

angular.module('angularProject', ['ngRoute', 'ui.bootstrap']);


// Declare app module and Appendages
angular.module('angularProject', ['ngRoute','angularProject.filters', 'angularProject.services', 'angularProject.directives', 'angularProject.controllers', 'ngCookies'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {
      	title: 'Home',
      	templateUrl: 'partials/home.html',
      	controller: 'homeCtrl'
      })
      .when('/login',{
        title: 'Login',
        templateUrl: 'partials/loginpartial.html',
        controller: 'loginCtrl'
        })
      .when('/profile', {
        title: 'Profile',
        templateUrl: 'partials/profile.html',
        controller: 'profileCtrl'
        })
      .when('/register', {
        title: 'Register',
        templateUrl: 'partials/register.html',
        controller: 'registerCtrl'
        })
      .when('/racekeeper', {
        title: 'Race Tracker',
        templateUrl: 'partials/racekeeper.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/addrace', {
        title: 'Add Race',
        templateUrl: 'partials/addrace.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/raceanalysis', {
        title: 'Race Analysis',
        templateUrl: 'partials/raceanalysis.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/raceanalysis/5K', {
        title: '5K Race Analysis',
        templateUrl: 'partials/5Kanalysis.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/raceanalysis/10K', {
        title: '10K Race Analysis',
        templateUrl: 'partials/10Kanalysis.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/raceanalysis/half', {
        title: 'Half Race Analysis',
        templateUrl: 'partials/halfanalysis.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/raceanalysis/marathon', {
        title: 'Marathon Race Analysis',
        templateUrl: 'partials/marathonanalysis.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/raceanalysis/50K', {
        title: '50K Race Analysis',
        templateUrl: 'partials/50Kanalysis.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/raceanalysis/100K', {
        title: '100K Race Analysis',
        templateUrl: 'partials/100Kanalysis.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/raceanalysis/100M', {
        title: '100M Race Analysis',
        templateUrl: 'partials/100Manalysis.html',
        controller: 'racekeeperCtrl'
        })
      .when('/racekeeper/:raceId', {
        title: 'Race Detail',
        templateUrl: 'partials/racedetail.html',
        controller: 'racedetailCtrl'
        })
      .when('/racefinder', {
        title: 'Event Finder',
        templateUrl: 'partials/racefinder.html',
        controller: 'racefinderCtrl'
        })
      .when('/raceplan', {
        title: 'Training Plan',
        templateUrl: 'partials/raceplan.html',
        controller: 'raceplanCtrl'
        })
      .when('/raceplan/myplans', {
        title: 'My Plans',
        templateUrl: 'partials/myplans.html',
        controller: 'raceplanCtrl'
        })
      .when('/raceplan/myplans/:raceId', {
        title: 'Plan Detail',
        templateUrl: 'partials/plandetail.html',
        controller: 'raceplandetailCtrl'
        })
      .otherwise({redirectTo: '/home'});
  }])
  .run(function($cookieStore, $rootScope, $http) {
  	if ($cookieStore.get('djangotoken')) {
        $rootScope.loggedIn = true;

      $http.defaults.headers.common['Authorization'] = 'Token ' + $cookieStore.get('djangotoken');
      //document.getElementById("main").style.display = "block";
      //  var protectedElements = document.querySelector(".protected") || [];
      //  for (var i=0; i < protectedElements.length; i++) {
      //      protectedElements[i].style.display = "block";
      //  }
    }
    //else {
    //	document.getElementById("login-holder").style.display = "block";
    //}
  });