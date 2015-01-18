angular.module('arete.controllers').controller('cmnMenuCtrl', function() {
    'use strict';

    var vm = this;

    vm.menuItems = [
        { displayName: 'mainMenu.PREMIUM', state: 'index.home', icon: 'ion-person-add' },
        { displayName: 'mainMenu.SETTINGS', state: 'index.home', icon: 'ion-settings' }
    ];

});