(function () {
    const app = angular.module('todoApp');

    app.controller('TodoCtrl', function ($scope, $window, todoStorage) {

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

        $scope.openPopup = () => {
            $window.open('/angular1-practice/popup.html', "myPopup", "menubar=1,resizable=1,width=350,height=250")
        };

        $window.parentWindowFunction = () => {
            console.log('부모창 function이 자식창 action에 의해 실행됨');
        }
    });

    app.controller('PopupCtrl', function ($scope, $window, todoStorage) {
        $scope.callParentWindowFunction = () => {
            $window.opener.parentWindowFunction();
        };
    });
})();
