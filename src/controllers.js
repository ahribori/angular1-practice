(function () {
    const app = angular.module('todoApp');

    app.controller('TodoCtrl', function ($scope, todoStorage) {

        $scope.todos = todoStorage.get();

        $scope.remove = (todo) => {
            todoStorage.remove(todo);
        };

        $scope.add = (newTodoTitle) => {
            todoStorage.add(newTodoTitle);
            $scope.newTodoTitle = '';
        };

        $scope.update = () => {
            todoStorage.update();
        };
    });
})();
