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
    .state('root.2040', {
      url: '/2040',
      data: {
        title: 'back',
        subtitle: ''
      }
    })
    .state('root.nhl', {
      url: '/nhl',
      data: {
        title: 'back',
        subtitle: ''
      }
    })
  $urlRouterProvider.otherwise('/')
})

.run(function ($rootScope, $window) {
  $rootScope.PAGE_DATA = Object.assign({}, $window.__PAGE_DATA__)
  console.debug($rootScope.PAGE_DATA)
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    $rootScope.currentState = toState
  })
  if (typeof $rootScope.userQuery === 'undefined') $rootScope.userQuery = {}
})

.controller('AppController', function ($rootScope, $scope, $document) {
  const ngClasses = {
    saturation: '{"saturate": img.hover, "desaturate":  !img.hover}',
    exposure: '{"": img.hover, "darken": !img.hover}'
  }

  $rootScope.$watch('currentState', function (newValue, oldValue) {
    $scope.state = newValue
  })

  $scope.data = {}
  $scope.data = {
    slideshow: {
      index: 0,
      images: $rootScope.PAGE_DATA.slideshow
    },
    home: {
      1: {
        section: 1,
        title: 'ty\'s list',
        subtitle: '',
        client: 'crazy benjee productions | nocturnal media',
        url: 'http://www.tyslist-themovie.com',
        videoUrl: 'https://vimeo.com/118726323',
        target: '_blank',
        images: [
          { file: 'Ty-1', hover: false, divClass: ngClasses.saturation },
          { file: 'Ty-2', hover: false, divClass: ngClasses.saturation },
          { file: 'Ty-3', hover: false, divClass: ngClasses.saturation }
        ]
      },
      2: {
        section: 2,
        title: '2040',
        subtitle: '',
        client: 'nocturnal media',
        url: 'root.2040',
        images: [
          { file: '2040-1', hover: false, divClass: ngClasses.saturation },
          { file: '2040-2', hover: false, divClass: ngClasses.saturation },
          { file: '2040-3', hover: false, divClass: ngClasses.saturation }
        ]
      },
      3: {
        section: 3,
        title: 'nhl vignettes',
        subtitle: '',
        client: 'IMG productions | nocturnal media',
        url: 'root.nhl',
        images: [
          { file: 'NHL-1', hover: false, divClass: ngClasses.saturation },
          { file: 'NHL-2', hover: false, divClass: ngClasses.saturation },
          { file: 'NHL-3', hover: false, divClass: ngClasses.saturation }
        ]
      }
    },
    twofour: {
      heroImage: { hover: false, src: 'assets/img/2040/2040-Main-Color.png', videoUrl: 'https://vimeo.com/86482447', divClass: '{"saturate": this.heroImage.hover, "desaturate":  !this.heroImage.hover}' }
    },
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
        title: 'short documentary',
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

  $scope.showVideo = function (obj) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const id = obj.videoUrl.split('https://vimeo.com/')[1]
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
        'href': obj.videoUrl.replace(new RegExp('([0-9])', 'i'), 'moogaloop.swf?clip_id=$1'),
        'type': 'swf'
      })
    }
  }

  $document.find('#slideshow').backstretch($scope.data.slideshow.images, { duration: 3000, fade: 750 })
})
