'use strict';

/* Directives */

angular.module('angularProject.directives', ['http-auth-interceptor'])
	.directive('authApplication', function($rootScope, $cookieStore, $http) {
 		return {
 			restrict: 'A',
    		link: function (scope, elem, attrs) {

    		  //var main = document.getElementById("main");
    		  var protectedElements = document.querySelector(".protected") || [];
    		  //var login = document.getElementById("login-holder");

    		  var applyLogin = function(good) {
    		  	if (good) {
                    scope.loggedIn = true;
                    $rootScope.logname = scope.username;
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

 	.directive('login', function($rootScope, $http, $cookieStore, authService, $location) {
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
                            $rootScope.logname = scope.username;
		            }); 

 				});

 			}
 		}
 	})



    .directive('myMap', function($http, $cookies) {
        var link = function(scope, element, attrs) {
            var map, infoWindow, geoCoder;
            var markers = [];

            // map config
            var mapOptions = {
                center: new google.maps.LatLng(37.7833, -100),
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            };

            // init the map
            function initMap() {
                if (map === void 0) {
                    map = new google.maps.Map(element[0], mapOptions);
                    geoCoder = new google.maps.Geocoder();
                }
            }

            // place a marker
            function setMarker(map, position, title, content) {
                var marker;
                var markerOptions = {
                    position: position,
                    map: map,
                    title: title,
                    content: content,
                    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
                };

                marker = new google.maps.Marker(markerOptions);
                markers.push(marker); // add marker to array

                google.maps.event.addListener(marker, 'click', function () {
                    // close window if not undefined
                    if (infoWindow !== void 0) {
                        infoWindow.close();
                    }
                    // create new window
                    var infoWindowOptions = {
                        content: content
                    };
                    infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                    infoWindow.open(map, marker);
                });
            }

            // show the map and place some markers
            initMap();

            $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
            $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
            $http.defaults.xsrfCookieName = 'csrftoken';
            $http.defaults.xsrfHeaderName = 'X-CSRFToken';

            var raceLocations = $http.get('http://localhost:8001/races/athlete/locations/');

            raceLocations.success(function(data) {
                console.log('success' + JSON.stringify(data));
                for (var i = 0; i < data.length; i++) {
                    var raceLocation = data[i];
                    if (raceLocation.latitude && raceLocation.longitude) {
                        var latlng = new google.maps.LatLng(raceLocation.latitude, raceLocation.longitude);
                        setMarker(map, latlng, raceLocation.location, raceLocation.event, raceLocation.distance);
                    }
                }

                //var i = 0;
                //var interval = setInterval(function(){
                //    {
                //        (
                //            function(location,event){
                //                geoCoder.geocode ({ address: location },
                //                (function (results, status) {
                //                    if (status == google.maps.GeocoderStatus.OK) {
                //                        var newAddress = results[0].geometry.location;
                //                        var latlng = new google.maps.LatLng(parseFloat(newAddress.lat()), parseFloat(newAddress.lng()));
                //                        setMarker(map, latlng, location, event);
                //                    } else {
                //                        console.log("geocoder error: " + status)
                //                    }
                //                }))
                //            })(data[i].location, data[i].event);
                //    }
                //    //increment the index
                //    if (++i >= data.length ) clearInterval(interval);
                //}, 2000);


            });

            raceLocations.error(function(data) {
                //scope.error= ['Error with cities.'];
                console.log('error' + data);
            });
        };

        return {
            restrict: 'A',
            template: '<div id="gmaps"></div>',
            replace: true,
            link: link
        };


        //var cities = new Array(
        //'Dorćol, Belgrade, Serbia',
        //'Dorćol, Belgrade, Serbia',
        //'Dorćol, Belgrade, Serbia',
        //'Rome, Italy',
        //'Rome, Italy');
        //
        //var gmarkers = [];
        //mc = new MarkerClusterer(map, [], mcOptions);
        //for (i=0; i<cities.length; i++) {
        //    var ptStr = cities[i];
        //}
        ////
        //var newAddress;
        ////
        //////Key Part Here!!! These should be cached somewhere rather than querying every page refresh like here though.
        //geocoder.geocode( { 'address': cities[i] }, function(results, status) {
        //    if (status == google.maps.GeocoderStatus.OK) {
        //        newAddress = results[0].geometry.location;
        //        var latlng = new google.maps.LatLng(parseFloat(newAddress.lat()),parseFloat(newAddress.lng()));
        //        gmarkers.push(createMarker(latlng,content[i]));
        //    }
        //});



    });
