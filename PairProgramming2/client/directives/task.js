(function (angular) {
    'use strict';

    angular
        .module('pair')
        .directive('task', task);

    function task() {
        var directive = {
            restrict: 'E',
            templateUrl: 'client/directives/task.html',
            scope: {
                task: '=task'
            }
        };

        return directive;
    }
})(window.angular);