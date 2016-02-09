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
            });

        $urlRouterProvider.otherwise('start');
    }

    run.$inject = ['$state'];

    function run($state) {
        console.log('Is working.');

        $state.go('start');
    }
})(window.angular);