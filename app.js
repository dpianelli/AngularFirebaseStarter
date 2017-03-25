(function() {

  var app = angular.module('app', ['ui.router', 'ui.bootstrap','angular-loading-bar', 'ngAnimate']);

  app.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $urlRouterProvider) {

    $logProvider.debugEnabled(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });
  }]);

  app.run(['$rootScope', '$log', function($rootScope, $log) {

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $log.debug('successfully changed states');
    
        $log.debug('event', event);
        $log.debug('toState', toState);
        $log.debug('toParams', toParams);
        $log.debug('fromState', fromState);
        $log.debug('fromParams', fromParams);
    });

    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {

      $log.error('The requested state was not found: ', unfoundState);

    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

      $log.error('An error occurred while changing states: ', error);

      $log.debug('event', event);
      $log.debug('toState', toState);
      $log.debug('toParams', toParams);
      $log.debug('fromState', fromState);
      $log.debug('fromParams', fromParams);
    });

  }]);

  app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;
  }]);

}());