(function(angular) {
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
                controller: 'BeccasucksCtrl as vm',
                resolve: {
                    cats: function (catService) {
                        return catService.getCats();
                    }
                }
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

    run.$inject = ['$state', '$rootScope'];

    function run($state, $rootScope) {
        //when you call $state.go('nameOfState') you will end up in here
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams, options) {
                console.log('ToState: ' + toState + ' From State: ' + fromState);
            });

        //if there is a problem navigating to a specific state, you will end up here
        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {
                console.log('Error: ' + error);
            });


        $state.go('start');
    }
})(window.angular);