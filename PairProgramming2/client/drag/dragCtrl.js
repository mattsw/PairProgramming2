(function (angular) {
    'use strict';

    angular
        .module('pair')
        .controller('DragCtrl', DragCtrl);

    DragCtrl.$inject = ['tasks', 'taskService'];

    function DragCtrl(tasks, taskService) {
        var vm = this;
        vm.tasks = tasks;

        vm.save = save;
        vm.updateTaskStatus = updateTaskStatus;
        vm.init = init;

        vm.models = {
            selected: null,
            lists: { 'open': [], 'progress': [], 'blocked': [], 'done': [] }
        };

        function init() {
            sortTasksByType(vm.models.lists, vm.tasks);
        }

        function sortTasksByType(lists, tasks) {
            _.each(tasks, function (task) {
                if (task.status === 'open') {
                    lists.open.push(task);
                }
                else if (task.status === 'progress') {
                    lists.progress.push(task);
                }
                else if (task.status === 'blocked') {
                    lists.blocked.push(task);
                }
                else if (task.status === 'done') {
                    lists.done.push(task);
                }
            });
        }

        function updateTaskStatus(task, status) {
            task.status = status;
        }

        function save() {
            taskService
                .saveTasks({
                    tasks:
                        _.concat(
                            vm.models.lists.open,
                            vm.models.lists.progress,
                            vm.models.lists.blocked,
                            vm.models.lists.done
                            )
                });
        }
    }

})(window.angular);