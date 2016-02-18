(function (angular) {
    angular.
        module('pair').
        controller('DevelopersCtrl', DevelopersCtrl);

    DevelopersCtrl.$inject = ['developersService'];

    function DevelopersCtrl(developersService) {
        var vm = this;

        developersService.getAllDevelopers().then(function (response) {
            vm.devList = response.data;
        });

        developersService.getBestDeveloper().then(function(response) {
            vm.bestDev = response.data;
        });
    }

})(window.angular);