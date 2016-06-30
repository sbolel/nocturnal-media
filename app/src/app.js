'use strict';

angular.module('starterApp', [
  'ngAnimate',
  'ui.router',
  'ngSanitize',
])

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'body@': {
          templateUrl: 'src/home/home.html',
          controller: 'HomeController'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
});
