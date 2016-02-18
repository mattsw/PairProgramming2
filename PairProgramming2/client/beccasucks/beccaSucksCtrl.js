(function (angular) {
    'use strict';

    angular.
        module('pair').
        controller('BeccaSucksCtrl', BeccaSucksCtrl);

    BeccaSucksCtrl.$inject = ['$state', 'cats'];

    function BeccaSucksCtrl($state, cats) {
        var vm = this;
        vm.isBeccaFail = isBeccaFail;
        vm.navigate = navigate;
        vm.navDevs = navDevs;
        vm.navDrag = navDrag;

        vm.cats = cats.data.cats;
 
        function isBeccaFail() {
            return true;
        }

        function navigate() {
            $state.go('mattislame');
        }

        function navDevs() {
            $state.go('developers');
        }

        function navDrag() {
            $state.go('drag');
        }
    }
})(window.angular);