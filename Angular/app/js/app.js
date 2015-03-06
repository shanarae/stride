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