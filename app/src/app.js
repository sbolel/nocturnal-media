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
          templateUrl: 'src/layout/header.html'
        },
        'content@': {
          templateUrl: 'src/home/home.html',
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
