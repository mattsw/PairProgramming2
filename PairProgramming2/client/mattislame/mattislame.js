(function(angular) {
    angular.
        module('pair').
        controller('MattislameCtrl', MattislameCtrl);

    function MattislameCtrl() {
        var vm = this;

        vm.mattislame = true;
    }

})(window.angular);