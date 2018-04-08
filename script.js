(function () {

    // 컨테이너
    const app = angular.module('todoApp', []);

    app.controller('TodoCtrl', ['$scope', function ($scope) {
        $scope.todos = [
            {
                title: '앵귤러 공부',
                completed: false,
                createdAt: Date.now(),
            },
            {
                title: '치과 가기',
                completed: false,
                createdAt: Date.now(),
            },
            {
                title: '파이썬 스터디',
                completed: false,
                createdAt: Date.now(),
            }
        ];

        $scope.remove = (idx) => {
            if (idx > -1) {
                $scope.todos.splice(idx, 1);
            }
        };

        $scope.add = (newTodoTitle) => {
            const newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now(),
            };

            $scope.todos.push(newTodo);

            $scope.newTodoTitle = '';
        }

    }]);
})();
