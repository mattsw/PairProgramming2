(function(angular) {
    angular
        .module('pair')
        .service('catService', catService);

    catService.$inject = ['$http'];

    function catService($http) {
        var service = {
            getCats : getCats
        };

        return service;

        function getCats() {
            return $http.get('api/cat');
        }
    }
})(window.angular)