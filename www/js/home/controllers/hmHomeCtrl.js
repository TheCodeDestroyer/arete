angular.module('arete.controllers').controller('hmHomeCtrl', function(cmnSyncSvc) {
    'use strict';

    var vm = this;

    vm.menuItems = [
        { displayName: 'home.menu.START_WORKOUT', state: 'index.workout.next', icon: 'ion-play' },
        { displayName: 'home.menu.NEW_WORKOUT', state: 'index.workout({ id: -1 })', icon: 'ion-plus-round' },
        { displayName: 'home.menu.SCHEDULE', state: 'index.schedule', icon: 'ion-calendar' }
    ];

    vm.syncData = function () {
        cmnSyncSvc.sync().then(function (status) {
            console.dir(status);
        });
    };
});