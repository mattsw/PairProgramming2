(function(angular) {
    angular.
        module('pair').
        controller('StartCtrl', startCtrl);

    startCtrl.$inject = [];

    function startCtrl() {
        console.log('Should work');
    }
})(window.angular);