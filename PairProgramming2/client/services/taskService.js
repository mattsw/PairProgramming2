(function (angular) {
    'use strict';

    angular
        .module('pair')
        .service('taskService', taskService);

    taskService.$inject = ['$http'];

    function taskService($http) {
        var tasks = null;

        var service = {
            getTasks: getTasks,
            saveTasks: saveTasks
        };

        return service;

        function getTasks() {
            return $http.get('api/task').then(success);

            function success(response) {
                tasks = response.data.tasks;
                return tasks;
            }
        }

        function saveTasks(tasks) {
            $http.post('api/task', tasks);
        }
    }

})(window.angular);