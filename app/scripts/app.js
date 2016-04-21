var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.spicy = 'super';
    
    $scope.megaSpicy = function() {
        $scope.spicy = 'mega';
    };
    
    $scope.ultraSpicy = function() {
        $scope.spicy = 'ultra';
    };
}]);