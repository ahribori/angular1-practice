(function() {

    // 컨테이너
    const app = angular.module('todoApp', []);

    app.controller('TodoCtrl', ['$scope', function($scope) {
        console.log($scope);
        $scope.todo = {
            title: '텍스트 필드',
            completed: false,
            createdAt: Date.now(),
        };

        $scope.dataList = [
            {
                index: 0,
                name: 'ahri',
            },
            {
                index: 1,
                name: 'bori',
            },
            {
                index: 2,
                name: 'hi',
            }
        ];

    }]);
})();
