(function () {
    const app = angular.module('todoApp');

    app.directive('todoTitle', function () {
        return {
            template: '<h1>Todo List</h1>',
        }
    });

    app.directive('todoItem', function () {
        return {
            templateUrl: 'src/templates/todoItem.tpl.html',
        }
    });

    app.directive('todoFilters', function () {
        return {
            templateUrl: 'src/templates/todoFilters.tpl.html',
        }
    });

    app.directive('todoForm', function () {
        return {
            templateUrl: 'src/templates/todoForm.tpl.html',
        }
    });

    app.directive('navigator', function() {
       return {
           templateUrl: 'src/templates/navigator.tpl.html',
       }
    });
})();
