(function (angular) {
    angular.
        module('pair').
        controller('BeccasucksCtrl', BeccasucksCtrl);

    BeccasucksCtrl.$inject = ['$state', 'catService'];

    function BeccasucksCtrl($state, catService) {
        var vm = this;
        vm.isBeccaFail = isBeccaFail;
        vm.navigate = navigate;
        vm.navDevs = navDevs;

        catService.getCats().then(function(response) {
            vm.catList = response.data;
        });

        function isBeccaFail() {
            return true;
        }

        function navigate() {
            $state.go('developers');
            //$state.go('mattislame');
        }

        function navDevs() {
            $state.go('developers');
        }
    }
})(window.angular);