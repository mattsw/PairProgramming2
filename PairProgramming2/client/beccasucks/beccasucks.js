(function (angular) {
    angular.
        module('pair').
        controller('BeccasucksCtrl', BeccasucksCtrl);

    BeccasucksCtrl.$inject = ['$state', 'cats'];

    function BeccasucksCtrl($state, cats) {
        var vm = this;
        vm.isBeccaFail = isBeccaFail;
        vm.navigate = navigate;
        vm.navDevs = navDevs;
        vm.cats = cats.data.cats;
 
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