angular.module('arete.controllers').controller('wrkDetailCtrl', function ($scope, $translate, $stateParams) {
    'use strict';

    var vm = this;
    vm.workoutId = $stateParams.id;
    vm.selected = '';
    vm.days = [];
    vm.repeatList = [
        { id: 1, label: 'general.repeat.DAILY' },
        { id: 2, label: 'general.repeat.WEEKLY' }
        //{ id: 3, label: 'general.repeat.MONTHLY' } TODO: Not supported for now
    ];
    vm.selectedRepeatType = _.first(vm.repeatList).id;

    for (var i = 1; i < 8; i++) {
        var day = { id: i, label: 'general.days.' + i };
        vm.days.push(day);
    }

    vm.showWeeklyLabel = function() {
        var parsedSelectedRepeatType = parseInt(vm.selectedRepeatType),
            weeklyRepeatListId = _.findWhere(vm.repeatList, { label: 'general.repeat.WEEKLY' }).id;
        return parsedSelectedRepeatType === weeklyRepeatListId;
    };

    vm.saveWorkout = function () {
        console.log('gfsdgf');
    };

});
