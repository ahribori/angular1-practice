(function () {
    const app = angular.module('todoApp');

    app.factory('todoStorage', function () {
        const storage = {

            todos: [],

            _saveToLocalStorage: (todos) => {
                localStorage.setItem('todos', JSON.stringify(todos));
            },

            _getFromLocalStorage: () => {
                const todos = localStorage.getItem('todos');
                return todos ? JSON.parse(todos) : [];
            },

            get: () => {
                angular.copy(storage._getFromLocalStorage(), storage.todos);
                return storage.todos;
            },

            remove: (idx) => {
                if (idx > -1) {
                    storage.todos.splice(idx, 1);
                    storage._saveToLocalStorage(storage.todos);
                }
            },

            add: (newTodoTitle) => {
                const newTodo = {
                    title: newTodoTitle,
                    completed: false,
                    createdAt: Date.now(),
                };
                storage.todos.push(newTodo);
                storage._saveToLocalStorage(storage.todos);
                storage.get();
            },

            update: () => {
                storage._saveToLocalStorage(storage.todos);
            }
        };

        return storage;
    })
})();