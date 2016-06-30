'use strict';

angular.module('starterApp', [
  'ngAnimate',
  'ui.router',
  'ngSanitize',
])

.config(["$locationProvider", "$stateProvider", "$urlRouterProvider", function($locationProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'body@': {
          template:'<section class=page-header><h1 class=project-name>express-angular-starter</h1><h2 class=project-tagline></h2><a id=gh-index href=https://github.com/sbolel/express-angular-starter class=btn>View on GitHub</a> <a id=gh-zip href=https://github.com/sbolel/express-angular-starter/zipball/master class=btn>Download .zip</a> <a id=gh-tar href=https://github.com/sbolel/express-angular-starter/tarball/master class=btn>Download .tar.gz</a></section><section class=main-content><footer class=site-footer><span class=site-footer-owner><a href=https://github.com/sbolel/express-angular-starter>express-angular-starter</a> is maintained by <a href=https://github.com/sbolel>sbolel</a>.</span></footer></section><section id=scripts><script type=text/javascript src=index.js></script></section>',
          controller: 'HomeController'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}]);

angular.module('starterApp')

.controller('HomeController', ["$scope", function($scope) {

}])
