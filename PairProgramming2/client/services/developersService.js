(function (angular) {
    angular
        .module('pair')
        .service('developersService', developersService);

    developersService.$inject = ['$http'];

    function developersService($http) {
        var service = {
            getAllDevelopers: getAllDevelopers,
            getBestDeveloper: getBestDeveloper
        };

        return service;

        function getAllDevelopers() {
            return $http.get('api/developers');
        };

        function getBestDeveloper() {
            return $http.get('api/developers/3');
        };
    }
})(window.angular)