'use strict';

/* Directives */

angular.module('angularProject.directives', ['http-auth-interceptor'])
	.directive('authApplication', function($cookieStore, $http, $rootScope, $location) {
 		return {
 			restrict: 'A',
    		link: function (scope, elem, attrs) {

    		  //var main = document.getElementById("main");
    		  var protectedElements = document.querySelector(".protected") || [];
    		  //var login = document.getElementById("login-holder");

    		  var applyLogin = function(good) {
    		  	if (good) {
                    scope.loggedIn = true;
                    //for (var i=0; i < protectedElements.length; i++) {
                    //    protectedElements[i].style.display = "block";
                    //}
	    		  	//main.style.display = "block";
	        		//login.style.display = "none";
	        	} else {
                    scope.loggedIn = false;

                    //for (var j=0; j < protectedElements.length; j++) {
                    //    protectedElements[j].style.display = "none";
                    //}
	        		//main.style.display = "none";
	        		//login.style.display = "block";
	        	}
    		  };

          scope.$on('event:auth-loginRequired', function () {
            applyLogin(false)
          });

          scope.$on('event:auth-loginConfirmed', function () {
            applyLogin(true);
          });

    		}
 		}
 	})
 	.directive('login', function($http, $cookieStore, authService, $location) {
 		return {
 			restrict: 'A',
 			templateUrl: 'js/login.html',
 			link: function(scope, elem, attrs) {

 				elem.bind('submit', function() {

					var user_data = {
		                "username": scope.username,
		                "password": scope.password
		            };
					
					//$http.post(constants.serverAddress + "api-token-auth", user_data)
		            $http.post("http://localhost:8001/api-token-auth/", user_data)
		                .success(function(response) {
		                	$cookieStore.put('djangotoken', response.token);
		                    $http.defaults.headers.common['Authorization'] = 'Token ' + response.token;
		                    authService.loginConfirmed();
                            $location.path('/racekeeper');
		            }); 

 				});

 			}
 		}
 	});
