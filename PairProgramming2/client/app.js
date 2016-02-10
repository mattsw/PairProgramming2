﻿(function(angular) {
    angular.
        module('pair', ['ui.router']).
        config(config).
        run(run);

    config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

    function config($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider
            .html5Mode(true)
            .hashPrefix('!');

        $stateProvider
            .state('start', {
                templateUrl: 'client/start/start.html',
                controller: 'StartCtrl as vm'
            })
            .state('beccasucks', {
                templateUrl: 'client/beccasucks/beccasucks.html',
                controller: 'BeccasucksCtrl as vm'
            })
            .state('mattislame', {
                templateUrl: 'client/mattislame/mattislame.html',
                controller: 'MattislameCtrl as vm'
            })
            .state('developers', {
                templateUrl: 'client/developers/developers.html',
                controller: 'DevelopersCtrl as vm'
            })
        ;

        $urlRouterProvider.otherwise('start');
    }

    run.$inject = ['$state'];

    function run($state) {
        console.log('Is working.');

        $state.go('start');
    }
})(window.angular);