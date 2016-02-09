(function (angular) {
    angular.
        module('pair').
        controller('BeccasucksCtrl', BeccasucksCtrl);

    BeccasucksCtrl.$inject = ['$state', 'catService'];

    function BeccasucksCtrl($state, catService) {
        var vm = this;
        vm.isBeccaFail = isBeccaFail;
        vm.navigate = navigate;

        catService.getCats().then(function(response) {
            vm.catList = response.data;
        });

        function isBeccaFail() {
            return true;
        }

        function navigate() {
            $state.go('mattislame');
        }
    }
})(window.angular);