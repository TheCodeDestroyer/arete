angular.module('arete.controllers').controller('cmnMenuCtrl', ['$scope', '$ionicSideMenuDelegate', '$translate', function($ionicSideMenuDelegate, $translate) {
    'use strict';

    var vm = this;

    vm.menuItems = [
        { displayName: 'mainMenu.PREMIUM', state: 'index.home', icon: 'ion-person-add' },
        { displayName: 'mainMenu.SETTINGS', state: 'index.home', icon: 'ion-settings' }
    ];

    vm.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}]);