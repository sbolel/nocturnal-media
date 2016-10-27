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
          template:'<div class="navbar" role="navigation"><div class="container"><div class="row"><div class="col-md-10 col-md-offset-1"><div class="navbar-header"><a class="navbar-brand hidden-xs" href="javascript:void(0)" ui-sref="root.home"><img src="assets/img/logo.png"></a> <a class="navbar-brand visible-xs" href="javascript:void(0)" ui-sref="root.home" style="width:225!important;height:28px!important;"><img src="assets/img/logo.png" style="width:225;height:28px;"></a> <button type="button" class="navbar-toggle" style="color:white;" data-toggle="collapse" data-target=".navbar-collapse">SITE MENU</button></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right navbar-links"><li ui-sref="root.home"><a>Home</a></li><li ui-sref="root.portfolio"><a>Portfolio</a></li><li ui-sref="root.contact"><a>Contact</a></li><li class="socials visible-xs"><span><a class="social" href="https://www.facebook.com/NocturnalMedia" target="_blank" title="Facebook"><i class="fa fa-facebook-square"></i></a> <a class="social" href="http://vimeo.com/nocturnalmedia" target="_blank" title="Vimeo"><i class="fa fa-vimeo-square"></i></a> <a class="social" href="http://youtube.com/user/nocturnalmediatv" target="_blank" title="YouTube"><i class="fa fa-youtube"></i></a> <a class="social" href="http://instagram.com/nocturnalmedia" target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a> <a class="social" href="https://twitter.com/nocturnal_media" target="_blank" title="Twitter"><i class="fa fa-twitter-square"></i></a></span></li></ul></div></div></div></div></div>'
        },
        'content@': {
          template:'<div id="hero-container"><div id="slideshow"></div></div><div class="container"><div class="slogan-container"><div class="row"><div class="col-md-10 col-md-offset-1"><div class="slogan-box"><div class="fill"><h2>Inspired by what keeps us up at night.</h2><p><a class="slogan" href="javascript:void(0)" ng-click="showVideo({videoUrl: \'https://vimeo.com/119135127\'})">view our demo reel <i class="fa fa-arrow-circle-right"></i></a></p></div></div><span class="socials hidden-xs"><a href="https://www.facebook.com/NocturnalMedia" target="_blank" title="Facebook"><i class="fa fa-facebook-square"></i></a> <a href="http://vimeo.com/nocturnalmedia" target="_blank" title="Vimeo"><i class="fa fa-vimeo-square"></i></a> <a href="http://youtube.com/user/nocturnalmediatv" target="_blank" title="YouTube"><i class="fa fa-youtube"></i></a> <a href="http://instagram.com/nocturnalmedia" target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a> <a href="https://twitter.com/nocturnal_media" target="_blank" title="Twitter"><i class="fa fa-twitter-square"></i></a></span><div id="page-title" ng-cloak class="valign"><h1 ng-class="{\'ng-hide\':$root.currentState.data.title!=\'back\'}" ui-sref="root.home" class="pointer">{{state.data.title}}</h1><h1 ng-class="{\'ng-hide\':$root.currentState.data.title==\'back\'}">{{state.data.title}}</h1><h2>{{state.data.subtitle}}</h2></div></div></div></div><div class="pages"><div ng-show="state.name===\'root.home\'"><div class="row collection-row" ng-repeat="item in data.home"><div class="col-md-10 col-md-offset-1"><div class="row collection-title"><h1 class="col-md-12" ng-if="item.section!=1"><a ui-sref="{{item.url}}">{{item.title}}</a></h1><h1 class="col-md-12" ng-if="item.section==1"><a target="_blank" href="{{item.url}}">{{item.title}}</a></h1></div><div class="row collection-subtitle"><div class="col-md-7 p-l-sm"><h2 class="p-n">{{item.client}}</h2></div><div class="col-md-5 collection-links p-r-sm"><a ng-if="item.section!=1" ui-sref="{{item.url}}"><h2>view project <img src="assets/img/btn-arrow.png"></h2></a> <a ng-if="item.section==1" ng-click="showVideo(item)"><h2>view trailer <img src="assets/img/btn-arrow.png"></h2></a> <a ng-if="item.section==1" href="{{item.url}}" target="_blank"><h2>view project <i class="fa fa-external-link"></i></h2></a></div></div><div class="row collection-images"><div class="col-md-4" ng-repeat="img in item.images" ng-mouseover="onMouseOver(this,false)" ng-mouseout="onMouseOut(this,false)" href="{{item.url}}"><img ng-class="{{img.divClass}}" ng-src="assets/img/home/{{img.file}}.png"></div></div></div></div></div><div ng-show="state.name===\'root.portfolio\'"><div class="row collection-row" ng-repeat="item in data.portfolio"><div class="col-md-10 col-md-offset-1"><div class="row collection-title"><h1 class="col-md-12">{{item.title}}</h1></div><div class="row collection-subtitle"><h2 class="col-md-12"><span>{{item.subtitle}}&nbsp;</span>{{item.client}}</h2></div><div class="row"><div class="col-md-4 collection-images pointer" ng-repeat="img in item.images" ng-mouseover="onMouseOver(this,true)" ng-mouseout="onMouseOut(this,true)"><img ng-class="{{img.divClass}}" ng-click="showVideo(this.img)" ng-src="assets/img/portfolio/{{img.file}}.png"></div></div></div></div></div><div ng-show="state.name===\'root.contact\'"><div id="form" class="row m-t-lg"><div class="col-md-10"><div id="wufoo-zojjzst18qvwp1"><a href="https://nocturnalmedia.wufoo.com/forms/zojjzst18qvwp1"></a></div></div></div></div><div ng-show="state.name===\'root.2040\'" class="row collection-row"><div class="col-md-10 col-md-offset-1"><div class="row collection-title"><h1 class="col-md-12">2040</h1></div><div class="row collection-subtitle"><h2 class="col-md-7">nocturnal media</h2><div class="col-md-5 collection-links"><a ng-click="showVideo({videoUrl:\'https://vimeo.com/86482447\'})"><h2>view episode <img src="assets/img/btn-arrow.png"></h2></a></div></div><div class="row" style="position:relative;"><div class="col-md-6 collection-images pointer" ng-mouseover="heroImage.hover=true" ng-mouseout="heroImage.hover=false"><img ng-click="showVideo(data.twofour.heroImage)" ng-class="{{data.twofour.heroImage.divClass}}" ng-src="{{data.twofour.heroImage.src}}" style="min-height:266px"></div><div class="col-md-6 collection-info"><div><h3 class="strong">2040: Pilot</h3><h3 class="light">In the pilot episode of the new webseries, three quicky friends toil with the ups and downs of trying to fund their indie passion project into a feature film reality.</h3></div></div></div><div class="row collection-images"><div class="col-md-6"><img src="assets/img/2040/2040-2.png"></div><div class="col-md-6"><img src="assets/img/2040/2040-3.png"></div></div><div class="row collection-images"><div class="col-md-6"><img src="assets/img/2040/2040-4.png"></div><div class="col-md-6"><img src="assets/img/2040/2040-5.png"></div></div></div></div><div ng-show="state.name===\'root.nhl\'" class="row collection-row"><div class="col-md-10 col-md-offset-1"><div class="row collection-title"><h1 class="col-md-12">2015 NHL ALL-STAR GAME SKILLS COMPETITION</h1></div><div class="row collection-subtitle"><h2 class="col-md-12">{{nhl.subtitle ? nhl.subtitle : \'IMG productions | nocturnal media\' }}</h2></div><div class="row collection-images"><div class="col-md-4 pointer" ng-click="showVideo({videoUrl: \'https://vimeo.com/119143705\'})"><img ng-mouseout="nhl.subtitle=\'\';hover.nhl1=false" ng-mouseover="hover.nhl1=true;nhl.subtitle=\'Fastest Skater\'" ng-class="{\'saturate\': hover.nhl1, \'desaturate\': !hover.nhl1}" src="assets/img/nhl/Fastest-Skater.png"></div><div class="col-md-4 pointer" ng-click="showVideo({videoUrl: \'https://vimeo.com/119143706\'})"><img ng-mouseout="nhl.subtitle=\'\';hover.nhl2=false" ng-mouseover="hover.nhl2=true;nhl.subtitle=\'Hardest Shot\'" ng-class="{\'saturate\': hover.nhl2, \'desaturate\': !hover.nhl2}" src="assets/img/nhl/Hardest-Shot.png"></div><div class="col-md-4 pointer" ng-click="showVideo({videoUrl: \'https://vimeo.com/119143707\'})"><img ng-mouseout="nhl.subtitle=\'\';hover.nhl3=false" ng-mouseover="hover.nhl3=true;nhl.subtitle=\'Shootout\'" ng-class="{\'saturate\': hover.nhl3, \'desaturate\': !hover.nhl3}" src="assets/img/nhl/Shootout.png"></div></div><div class="row collection-images"><div class="col-md-4 pointer" ng-click="showVideo({videoUrl: \'https://vimeo.com/119143707\'})"><img ng-mouseout="nhl.subtitle=\'\';hover.nhl4=false" ng-mouseover="hover.nhl4=true;nhl.subtitle=\'Accuracy\'" ng-class="{\'saturate\': hover.nhl4, \'desaturate\': !hover.nhl4}" src="assets/img/nhl/Accuracy.png"></div><div class="col-md-4 pointer" ng-click="showVideo({videoUrl: \'https://vimeo.com/120620684\'})"><img ng-mouseout="nhl.subtitle=\'\';hover.nhl5=false" ng-mouseover="hover.nhl5=true;nhl.subtitle=\'Relay Challenge\'" ng-class="{\'saturate\': hover.nhl5, \'desaturate\': !hover.nhl5}" src="assets/img/nhl/Relay-Challenge.png"></div><div class="col-md-4 pointer" ng-click="showVideo({videoUrl: \'https://vimeo.com/120620685\'})"><img ng-mouseout="nhl.subtitle=\'\';hover.nhl6=false" ng-mouseover="hover.nhl6=true;nhl.subtitle=\'Breakaway\'" ng-class="{\'saturate\': hover.nhl6, \'desaturate\': !hover.nhl6}" src="assets/img/nhl/Breakaway.png"></div></div><div class="row collection-title"><h1 class="col-md-12">2014 nhl awards</h1></div><div class="row collection-subtitle"><h2 class="col-md-12">IMG productions | nocturnal media</h2></div><div ng-click="showVideo({videoUrl: \'https://vimeo.com/119059235\'})" class="row relative"><div class="col-md-6 collection-images pointer"><img ng-class="{\'saturate\': hover.hart, \'desaturate\': !hover.hart}" ng-mouseover="hover.hart=true" ng-mouseout="hover.hart=false" src="assets/img/portfolio/Hart-Trophy.png"></div><div class="col-md-6 collection-info"><div><h3>HART MEMORIAL TROPHY</h3><h3>Michael J. Fox introduces the NHL\'s MVP award and pays tribute to several key players who have earned it in the past.</h3></div></div></div><div ng-click="showVideo({videoUrl: \'https://vimeo.com/119059236\'})" class="row relative"><div class="col-md-6 collection-images pointer"><img ng-class="{\'saturate\': hover.norris, \'desaturate\': !hover.norris}" ng-mouseover="hover.norris=true" ng-mouseout="hover.norris=false" src="assets/img/portfolio/Norris-Trophy.png"></div><div class="col-md-6 collection-info"><div><h3>JAMES NORRIS MEMORIAL TROPHY</h3><h3>Keving Connolly introduces the James Norris Memorial Trophy, given each year to the league\'s top defenseman.</h3></div></div></div><div ng-click="showVideo({videoUrl: \'https://vimeo.com/119059237\'})" class="row relative"><div class="col-md-6 collection-images pointer"><img ng-class="{\'saturate\': hover.selke, \'desaturate\': !hover.selke}" ng-mouseover="hover.selke=true" ng-mouseout="hover.selke=false" src="assets/img/portfolio/Selke.png"></div><div class="col-md-6 collection-info"><div><h3>FRANK J. SELKE TROPHY</h3><h3>Susan Sarandon introduces the Frank J. Selke Trophy, awarded each season to the forward who excels the most in defensive play.</h3></div></div></div><div ng-click="showVideo({videoUrl: \'https://vimeo.com/119059238\'})" class="row relative"><div class="col-md-6 collection-images pointer"><img ng-class="{\'saturate\': hover.adams, \'desaturate\': !hover.adams}" ng-mouseover="hover.adams=true" ng-mouseout="hover.adams=false" src="assets/img/portfolio/Adams.png"></div><div class="col-md-6 collection-info"><div><h3>JACK ADAMS AWARD</h3><h3>James Lipton introduces the Jack Adams Award, presented each year to the coach who contributes the most to his team\'s success.</h3></div></div></div></div></div></div></div><script>\nvar script = document.createElement(\'script\');\nscript.type = \'text/javascript\';\nscript.src = \'/assets/js/form.js\';\ndocument.body.appendChild(script);\n</script>',
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
    var href = obj.videoUrl
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var id = href.split('https://vimeo.com/')[1]
      window.open('http://player.vimeo.com/video/' + id)
    } else {
      // e.preventDefault()
      window.$.fancyboxPlus({
        'padding': 0,
        'autoScale': false,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        // 'title'   : (this).title,
        'width': 960,
        'height': 540,
        'href': href.replace(new RegExp('([0-9])', 'i'), 'moogaloop.swf?clip_id=$1'),
        'type': 'swf'
      })
    }
  }

  $document.find('#slideshow').backstretch($scope.data.slideshow.images, { duration: 3000, fade: 750 })
})