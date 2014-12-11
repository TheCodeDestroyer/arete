angular.module('arete.controllers').controller('cmnMenuCtrl', ['$scope', '$ionicSideMenuDelegate', '$translate', function($scope, $ionicSideMenuDelegate, $translate) {
    'use strict';

    $scope.menuItems = [
        { displayName: 'mainMenu.PREMIUM', state: 'index.home', icon: 'ion-person-add' },
        { displayName: 'mainMenu.SETTINGS', state: 'index.home', icon: 'ion-settings' }
    ];

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}]);