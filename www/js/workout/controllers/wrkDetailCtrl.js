angular.module('arete.controllers').controller('wrkDetailCtrl', function ($scope, $translate, $stateParams) {
    'use strict';

    var vm = this;
    vm.workoutId = $stateParams.id;
    vm.selected = '';
    vm.days = [];

    for (var i = 1; i < 8; i++) {
        var day = { id: i, label: 'general.days.' + i };
        vm.days.push(day);
    }

});
