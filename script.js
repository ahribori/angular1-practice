(function() {

    // 컨테이너
    const app = angular.module('todoApp', []);

    app.controller('TodoCtrl', ['$scope', function($scope) {
        console.log($scope);
        $scope.todo = {
            title: '텍스트 필드',
            completed: false,
            createdAt: Date.now(),
        }
    }]);
})();
