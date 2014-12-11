angular.module('arete.controllers').controller('cmnMenuCtrl', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {
    'use strict';

    $scope.menuItems = [
        { displayName: $translate.instant('mainMenu.PREMIUM'), state: 'index.home', icon: '' },
        { displayName: $translate.instant('mainMenu.SETTINGS'), state: 'index.home', icon: '' }
    ];

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}]);