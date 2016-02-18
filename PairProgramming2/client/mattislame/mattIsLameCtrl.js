(function(angular) {
    angular.
        module('pair').
        controller('MattIsLameCtrl', MattIsLameCtrl);

    function MattIsLameCtrl() {
        var vm = this;

        vm.mattislame = true;
    }

})(window.angular);