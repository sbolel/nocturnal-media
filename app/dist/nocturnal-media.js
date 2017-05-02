window.angular.module('starterApp', [
  'ngAnimate',
  'ui.router',
  'ngSanitize'
])

.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      url: '',
      abstract: true,
      views: {
        'header@': {
          template:'<div class="navbar navbar-fixed-top" role="navigation"><div class="container"><div class="row"><div class="col-md-10 col-md-offset-1"><div class="navbar-header"><a class="navbar-brand hidden-xs" href="javascript:void(0)" ui-sref="root.home"><img src="assets/img/logo.png"></a> <a class="navbar-brand visible-xs" href="javascript:void(0)" ui-sref="root.home" style="width:225!important;height:28px!important;"><img src="assets/img/logo.png" style="width:225;height:28px;"></a> <button type="button" class="navbar-toggle" style="color:white;" data-toggle="collapse" data-target=".navbar-collapse">SITE MENU</button></div><div id="collapse"><ul class="nav navbar-nav navbar-right navbar-links"><li ui-sref="root.home" data-toggle="collapse" data-target=".navbar-collapse"><a>Home</a></li><li ui-sref="root.portfolio" data-toggle="collapse" data-target=".navbar-collapse"><a>Portfolio</a></li><li ui-sref="root.contact" data-toggle="collapse" data-target=".navbar-collapse"><a>Contact</a></li><li class="socials visible-xs"><span><a class="social" href="https://www.facebook.com/NocturnalMedia" target="_blank" title="Facebook"><i class="fa fa-facebook-square"></i></a> <a class="social" href="http://vimeo.com/nocturnalmedia" target="_blank" title="Vimeo"><i class="fa fa-vimeo-square"></i></a> <a class="social" href="http://youtube.com/user/nocturnalmediatv" target="_blank" title="YouTube"><i class="fa fa-youtube"></i></a> <a class="social" href="http://instagram.com/nocturnalmedia" target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a> <a class="social" href="https://twitter.com/nocturnal_media" target="_blank" title="Twitter"><i class="fa fa-twitter-square"></i></a></span></li></ul></div></div></div></div></div>'
        },
        'content@': {
          template:'<div id="hero-container"><div id="slideshow"></div></div><div class="container"><div class="slogan-container"><div class="row"><div class="col-md-10 col-md-offset-1"><div class="slogan-box"><div class="fill"><h2>Inspired by what keeps us up at night.</h2><p><a class="slogan" href="javascript:void(0)" ng-click="showVideo(\'https://vimeo.com/119135127\')">view our demo reel <i class="fa fa-arrow-circle-right"></i></a></p></div></div><span class="socials hidden-xs"><a href="https://www.facebook.com/NocturnalMedia" target="_blank" title="Facebook"><i class="fa fa-facebook-square"></i></a> <a href="http://vimeo.com/nocturnalmedia" target="_blank" title="Vimeo"><i class="fa fa-vimeo-square"></i></a> <a href="http://youtube.com/user/nocturnalmediatv" target="_blank" title="YouTube"><i class="fa fa-youtube"></i></a> <a href="http://instagram.com/nocturnalmedia" target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a> <a href="https://twitter.com/nocturnal_media" target="_blank" title="Twitter"><i class="fa fa-twitter-square"></i></a></span><div id="page-title" ng-cloak class="valign"><h1 ng-class="{\'ng-hide\':$root.currentState.data.title!==\'back\'}" ng-bind="state.data.title" ui-sref="root.home" class="pointer"></h1><h1 ng-class="{\'ng-hide\':$root.currentState.data.title===\'back\'}">{{state.data.title}}</h1><h2>{{state.data.subtitle}}</h2></div></div></div></div><div class="pages"><div ng-show="state.name === \'root.home\'"><div class="row collection-row" ng-repeat="item in data.home | orderBy:\'order\'"><div class="col-md-10 col-md-offset-1"><div class="row collection-title"><h1 class="col-md-12"><a ng-if="item.titleLink.fields.action === \'openPage\'" href="{{::item.titleLink.fields.url}}" ng-bind="item.title" target="_blank"></a> <a ng-if="item.titleLink.fields.action === \'showVideo\'" ng-click="showVideo(item.titleLink.fields.url)" ng-bind="item.title"></a></h1></div><div class="row collection-subtitle"><div class="col-md-7 p-l-sm"><h2 class="p-n" ng-bind="item.subtitle"></h2></div><div class="col-md-5 collection-links p-r-sm"><section ng-repeat="link in item.links | orderBy:\'-fields.text\'"><a ng-if="link.fields.action === \'openPage\'" href="{{::link.fields.url}}" target="_blank"><h2>{{::link.fields.text}} <i class="fa fa-external-link"></i></h2></a> <a ng-if="link.fields.action === \'showVideo\'" ng-click="showVideo(link.fields.url)"><h2>{{::link.fields.text}} <img src="assets/img/btn-arrow.png"></h2></a></section></div></div><div class="row collection-images"><div class="col-md-4" ng-repeat="img in item.images" ng-mouseover="onMouseOver(this,false)" ng-mouseout="onMouseOut(this,false)" href="{{::item.url}}"><img ng-class="{{img.divClass}}" ng-src="{{::img.file}}"></div></div></div></div></div><div ng-show="state.name === \'root.portfolio\'"><div class="row collection-row" ng-repeat="item in data.portfolio"><div class="col-md-10 col-md-offset-1"><div class="row collection-title"><h1 class="col-md-12" ng-bind="item.title"></h1></div><div class="row collection-subtitle"><h2 class="col-md-12"><span ng-bind="item.subtitle"></span>&nbsp;<span ng-bind="item.client"></span></h2></div><div class="row"><div class="col-md-4 collection-images pointer" ng-repeat="img in item.images" ng-mouseover="onMouseOver(this,true)" ng-mouseout="onMouseOut(this,true)"><img ng-class="{{img.divClass}}" ng-click="showVideo(this.img.videoUrl)" ng-src="{{::img.file}}"></div></div></div></div></div><div ng-show="state.name === \'root.contact\'"><div id="form" class="row m-t-lg"><div class="col-md-10"><div id="wufoo-zojjzst18qvwp1"><a href="https://nocturnalmedia.wufoo.com/forms/zojjzst18qvwp1"></a></div></div></div></div></div></div><script>\nvar script = document.createElement(\'script\');\nscript.type = \'text/javascript\';\nscript.src = \'/assets/js/form.js\';\ndocument.body.appendChild(script);\n</script>',
          controller: 'AppController'
        },
        'footer@': {
          template: '&copy Nocturnal Media LLC 2016'
        }
      }
    })
    .state('root.home', {
      url: '/',
      data: {
        title: 'spotlight',
        subtitle: 'what\'s keeping us up'
      }
    })
    .state('root.contact', {
      url: '/contact',
      data: {
        title: 'contact',
        subtitle: 'we\'re awake'
      }
    })
    .state('root.portfolio', {
      url: '/portfolio',
      data: {
        title: 'portfolio',
        subtitle: 'what\'s kept us up'
      }
    })
  $urlRouterProvider.otherwise('/')
})

.run(function ($rootScope, $window) {
  $rootScope.PAGE_DATA = Object.assign({}, $window.__PAGE_DATA__)
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    $rootScope.currentState = toState
  })
  if (typeof $rootScope.userQuery === 'undefined') $rootScope.userQuery = {}
})

.controller('AppController', function ($rootScope, $scope, $document) {
  $rootScope.$watch('currentState', function (newValue, oldValue) {
    $scope.state = newValue
  })

  $scope.data = {}
  $scope.data = {
    slideshow: {
      index: 0,
      images: $rootScope.PAGE_DATA.slideshow
    },
    home: $rootScope.PAGE_DATA.spotlight,
    portfolio: {
      1: {
        section: 1,
        title: 'music video',
        subtitle: '',
        client: '',
        images: $rootScope.PAGE_DATA.portfolio.musicVideo
      },
      2: {
        section: 2,
        title: 'commercial',
        subtitle: '',
        client: '',
        images: $rootScope.PAGE_DATA.portfolio.commercial
      },
      3: {
        section: 3,
        title: 'comedy',
        subtitle: '',
        client: '',
        images: $rootScope.PAGE_DATA.portfolio.comedy
      },
      4: {
        section: 4,
        title: 'sports',
        subtitle: '',
        client: '',
        images: $rootScope.PAGE_DATA.portfolio.sports
      },
      5: {
        section: 5,
        title: 'short documentary & narrative',
        subtitle: '',
        client: '',
        images: $rootScope.PAGE_DATA.portfolio.documentary
      }
    }
  }

  $scope.getImageClassOnHover = function (divClass) {
    return '{' + divClass.isHover + ': img.hover, ' + divClass.isNotHover + ': !img.hover}'
  }

  $scope.onMouseOver = function (obj, changeText) {
    obj.img.hover = true
    if (changeText) {
      obj.item.subtitle = obj.img.title
      obj.item.client = obj.img.client
    }
  }

  $scope.onMouseOut = function (obj, changeText) {
    obj.img.hover = false
    if (changeText) {
      obj.item.subtitle = ''
      obj.item.client = ''
    }
  }

  $scope.showVideo = function (videoUrl) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const id = videoUrl.split('https://vimeo.com/')[1]
      window.open('http://player.vimeo.com/video/' + id)
    } else {
      window.$.fancyboxPlus({
        'padding': 0,
        'autoScale': false,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'width': 960,
        'height': 540,
        'href': videoUrl.replace(new RegExp('([0-9])', 'i'), 'moogaloop.swf?clip_id=$1'),
        'type': 'swf'
      })
    }
  }

  $document.find('#slideshow').backstretch($scope.data.slideshow.images, { duration: 3000, fade: 750 })


  $(window).bind("resize", checkCollapse)

  checkCollapse()

  function checkCollapse(){
    if ($(this).width() < 768){
      $('#collapse').addClass('navbar-collapse').addClass('collapse')
    } else {
      $('#collapse').removeClass('navbar-collapse').removeClass('collapse')
    }
  }
})
