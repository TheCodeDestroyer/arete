angular.module('arete.controllers').controller('cmnMenuCtrl', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {
    'use strict';

    $scope.menuItems = [
        { displayName: 'Premium', state: 'index.home', icon: '' },
        { displayName: 'Settings', state: 'index.home', icon: '' }
    ];

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}]);