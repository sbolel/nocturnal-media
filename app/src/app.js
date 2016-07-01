'use strict'

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
        '@header': {
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

.run(function ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    $rootScope.currentState = toState
    if (toState.data.title === 'back') {
      // var body = $('html, body')
      // var title = $('#page-title')
      // body.animate({scrollTop:title.position().top * 2}, '0', 'swing', function () {})
    }
  })
  if (typeof $rootScope.userQuery === 'undefined') {
    $rootScope.userQuery = {}
  }
})

.controller('AppController', function ($rootScope, $scope, $document) {
  var ngClasses = {
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
      images: [
        'assets/img/slideshow/2.png',
        'assets/img/slideshow/3.png',
        'assets/img/slideshow/5.png',
        'assets/img/slideshow/6.png',
        'assets/img/slideshow/7.png',
        'assets/img/slideshow/8.png',
        'assets/img/slideshow/10.png',
        'assets/img/slideshow/11.png',
        'assets/img/slideshow/12.png',
        'assets/img/slideshow/13.png',
        'assets/img/slideshow/16.png',
        'assets/img/slideshow/20.png',
        'assets/img/slideshow/21.png',
        'assets/img/slideshow/22.png'
      ]
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
    // nhl: {
    //   thumbs: {
    //   1 : {
    //     section: 1,
    //     images: [
    //     {title: 'Fastest Skater', file: 'assets/img/nhl/Fastest-Skater.png', videoUrl: 'https://vimeo.com/119143705', hover: false, divClass: ngClasses.saturation},
    //     {title: 'Hardest Shot', file: 'assets/img/nhl/Hardest-Shot.png', videoUrl: 'https://vimeo.com/119143706', hover: false, divClass: ngClasses.saturation},
    //     {title: 'Shootout', file: 'assets/img/nhl/Shootout.png', videoUrl: 'https://vimeo.com/119143707', hover: false, divClass: ngClasses.saturation}
    //     ]
    //   },
    //   2 : {
    //     section: 2,
    //     images: [
    //     {title: 'subtitle', file: 'assets/img/nhl/Fastest-Skater.png', videoUrl: 'https://vimeo.com/87061411', hover: false, divClass: ngClasses.saturation},
    //     {title: 'subtitle', file: 'assets/img/nhl/Hardest-Shot.png', videoUrl: 'https://vimeo.com/61194221', hover: false, divClass: ngClasses.saturation},
    //     {title: 'subtitle', file: 'assets/img/nhl/Shootout.png', videoUrl: 'https://vimeo.com/26400026', hover: false, divClass: ngClasses.saturation}
    //     ]
    //   }
    //   },
    //   vignettes: [
    //   {title: 'get busy', client: 'whysowhite', file: 'Get-Busy', videoUrl: 'https://vimeo.com/87061411', hover: false, divClass: ngClasses.saturation},
    //   {title: 'down down boy', client: 'dash hammerstein', file: 'DDB', videoUrl: 'https://vimeo.com/61194221', hover: false, divClass: ngClasses.saturation},
    //   {title: 'wait', client: 'short film featuring music from Zero 7', file: 'Wait', videoUrl: 'https://vimeo.com/26400026', hover: false, divClass: ngClasses.saturation}
    //   ]

    // },
    twofour: {
      heroImage: { hover: false, src: 'assets/img/2040/2040-Main-Color.png', videoUrl: 'https://vimeo.com/86482447', divClass: '{"saturate": this.heroImage.hover, "desaturate":  !this.heroImage.hover}' }
    },
    portfolio: {
      1: {
        section: 1,
        title: 'music video',
        subtitle: '',
        client: '',
        images: [
          { title: 'get busy', client: 'whysowhite', file: 'Get-Busy', videoUrl: 'https://vimeo.com/87061411', hover: false, divClass: ngClasses.saturation },
          { title: 'down down boy', client: 'dash hammerstein', file: 'DDB', videoUrl: 'https://vimeo.com/61194221', hover: false, divClass: ngClasses.saturation },
          { title: 'wait', client: 'short film featuring music from Zero 7', file: 'Wait', videoUrl: 'https://vimeo.com/26400026', hover: false, divClass: ngClasses.saturation },
          { title: 'something good to eat', client: 'rosie\'s theater kids', file: 'Something-Good', videoUrl: 'https://vimeo.com/129844688', hover: false, divClass: ngClasses.saturation }
        ]
      },
      2: {
        section: 2,
        title: 'commercial',
        subtitle: '',
        client: '',
        images: [
          { title: 'free & secure', client: 'chargeitspot', file: 'CiS', videoUrl: 'https://vimeo.com/111853529', hover: false, divClass: ngClasses.saturation },
          { title: 'faux pas', client: 'american juice company', file: 'FauxPas', videoUrl: 'https://vimeo.com/83325939', hover: false, divClass: ngClasses.saturation },
          { title: 'tunie’s', client: 'tunie’s natural grocery', file: 'Tunies', videoUrl: 'https://vimeo.com/114486641', hover: false, divClass: ngClasses.saturation },
          { title: 'goldfish', client: 'goldfish swim school', file: 'GoldSwim', videoUrl: 'https://vimeo.com/95991792', hover: false, divClass: ngClasses.saturation },
          { title: 'auria', client: 'wavemachine labs', file: 'Auria', videoUrl: 'https://vimeo.com/45937660', hover: false, divClass: ngClasses.saturation },
          { title: 'armory', client: 'american juice company', file: 'Armory', videoUrl: 'https://vimeo.com/76840123', hover: false, divClass: ngClasses.exposure }
        ]
      },
      3: {
        section: 3,
        title: 'comedy',
        subtitle: '',
        client: '',
        images: [
          { title: 'pilot episode', client: '2040', file: '2040', videoUrl: 'https://vimeo.com/86482447', hover: false, divClass: ngClasses.saturation },
          { title: 'baristas', client: 'batman vs. superman', file: 'BS-Coffee', videoUrl: 'https://vimeo.com/119062586', hover: false, divClass: ngClasses.saturation },
          { title: 'saturday', client: 'batman vs. superman', file: 'BS-Outdoors', videoUrl: 'https://vimeo.com/119062591', hover: false, divClass: ngClasses.saturation },
          { title: 'rainy day', client: 'batman vs. superman', file: 'BS-Indoors', videoUrl: 'https://vimeo.com/119062593', hover: false, divClass: ngClasses.saturation },
          { title: 'switch', client: 'batman vs. superman', file: 'BS-Impersonate', videoUrl: 'https://vimeo.com/119062595', hover: false, divClass: ngClasses.saturation },
          { title: 'yoga', client: 'batman vs. superman', file: 'BS-Yoga', videoUrl: 'https://vimeo.com/119062588', hover: false, divClass: ngClasses.saturation }
        ]
      },
      4: {
        section: 4,
        title: 'sports',
        subtitle: '',
        client: '',
        images: [
          { title: 'hart memorial trophy', client: '2014 nhl awards', file: 'Hart-Trophy', videoUrl: 'https://vimeo.com/119059235', hover: false, divClass: ngClasses.saturation },
          { title: 'norris trophy', client: '2014 nhl awards', file: 'Norris-Trophy', videoUrl: 'https://vimeo.com/119059236', hover: false, divClass: ngClasses.saturation },
          { title: 'jack adams award', client: '2014 nhl awards', file: 'Adams', videoUrl: 'https://vimeo.com/119059238', hover: false, divClass: ngClasses.saturation },
          { title: 'frank j. selke trophy', client: '2014 nhl awards', file: 'Selke', videoUrl: 'https://vimeo.com/119059237', hover: false, divClass: ngClasses.saturation },
          { title: 'michelle wie', client: 'img productions', file: 'Michelle-Wie', videoUrl: 'https://vimeo.com/114353331', hover: false, divClass: ngClasses.saturation }
          // {title: 'fastest skater', client:'2015 nhl all-star skills competition', file: '', videoUrl: '', hover: false, divClass: ngClasses.saturation},
          // {title: 'hardest shot', client:'2015 nhl all-star skills competition', file: '', videoUrl: '', hover: false, divClass: ngClasses.saturation},
          // {title: 'accuracy shooting', client:'2015 nhl all-star skills competition', file: 'Accuracy', videoUrl: 'https://vimeo.com/120620686', hover: false, divClass: ngClasses.saturation},
          // {title: 'relay challenge', client:'2015 nhl all-star skills competition', file: 'Relay-Challenge', videoUrl: 'https://vimeo.com/120620685', hover: false, divClass: ngClasses.saturation},
          // {title: 'breakaway', client:'2015 nhl all-star skills competition', file: 'Breakaway', videoUrl: 'https://vimeo.com/120620684', hover: false, divClass: ngClasses.saturation}
          // {title: 'shootout', client:'2015 nhl all-star skills competition', file: '', videoUrl: '', hover: false, divClass: ngClasses.saturation},
          // {title: 'victor cruz highlight reel', client:'img productions', file: '', videoUrl: '', hover: false, divClass: ngClasses.saturation}
        ]
      },
      5: {
        section: 5,
        title: 'short documentary',
        subtitle: '',
        client: '',
        images: [
          { title: 'roger ebert', client: 'chicagoans of the year', file: 'Ebert', videoUrl: 'https://vimeo.com/34587230', hover: false, divClass: ngClasses.saturation },
          { title: 'for generations to come', client: 'audubon new york', file: 'For-Generations', videoUrl: 'https://vimeo.com/30775389', hover: false, divClass: ngClasses.saturation }
        ]
      }
    }
  }
  // $scope.getImageClassOnHover = function (divClass) {
  //   return '{'' + divClass.isHover + '': img.hover, '' + divClass.isNotHover + '': !img.hover}'
  // }
  // $scope.onMouseOver = function (obj, changeText) {
  //   obj.img.hover = true
  //   if (changeText) {
  //     obj.item.subtitle = obj.img.title
  //     obj.item.client = obj.img.client
  //   }
  // }
  // $scope.onMouseOut = function (obj, changeText) {
  //   obj.img.hover = false
  //   if (changeText) {
  //     obj.item.subtitle = ''
  //     obj.item.client = ''
  //   }
  // }
  // $scope.showVideo = function (obj) {
  //   var href = obj.videoUrl
  //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //     var id = href.split('https://vimeo.com/')[1]
  //     window.open('http://player.vimeo.com/video/' + id)
  //   } else {
  //     // e.preventDefault()
  //     $.fancybox({
  //       'padding': 0,
  //       'autoScale': false,
  //       'transitionIn': 'elastic',
  //       'transitionOut': 'elastic',
  //       'speedIn': 600,
  //       'speedOut': 200,
  //       // 'title'   : (this).title,
  //       'width': 960,
  //       'height': 540,
  //       'href': href.replace(new RegExp('([0-9])', 'i'), 'moogaloop.swf?clip_id=$1'),
  //       'type': 'swf'
  //     })
  //   }
  // }
  // $document.find('#slideshow').backstretch($scope.data.slideshow.images, { duration: 3000, fade: 750 })
})

