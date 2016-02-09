(function(angular) {
    angular.
        module('pair').
        controller('StartCtrl', startCtrl);

    startCtrl.$inject = ['$state'];

    function startCtrl($state) {
        var vm = this;
        console.log('Should work');
        vm.canShowDogs = true;

        vm.navigate = navigate;

        function navigate() {
            $state.go('beccasucks');
        }
    }
})(window.angular);