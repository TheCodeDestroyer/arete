angular.module('arete.controllers').controller('cmnMenuCtrl', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {
    'use strict';

    $scope.menuItems = [
        { displayName: 'Premium', state: '', icon: '' },
        { displayName: 'Settings', state: '', icon: '' }
    ];

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}]);