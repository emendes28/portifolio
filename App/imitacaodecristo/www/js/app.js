// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.cap1', {
    url: '/cap1',
    views: {
      'menuContent': {
        templateUrl: 'templates/I. AVISOS ÚTEIS PARA A VIDA ESPIRITUAL.html'
      }
    }
  })

  .state('app.cap2', {
      url: '/cap2',
      views: {
        'menuContent': {
          templateUrl: 'templates/II. EXORTAÇÕES À VIDA INTERIOR.html'
        }
      }
    })
    .state('app.cap3', {
      url: '/cap3',
      views: {
        'menuContent': {
          templateUrl: 'templates/III. DA CONSOLAÇÃO INTERIOR.html'
        }
      }
    }).state('app.cap4', {
    url: '/cap4',
    views: {
      'menuContent': {
        templateUrl: 'templates/IV. DO SACRAMENTO DO ALTAR.html'
      }
    }
  })

  .state('app.random', {
    url: '/cap4',
    views: {
      'menuContent': {
        templateUrl: 'templates/IV. DO SACRAMENTO DO ALTAR.html',
        Controller : 'RandomController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cap1');
});
