angular.module('arete.controllers').controller('wrkDetailCtrl', function ($q, $scope, $translate, $stateParams, Workout) {
    'use strict';

    var vm = this;
    vm.workoutId = $stateParams.id;
    vm.workout = {};
    vm.selected = '';
    vm.days = [];
    vm.repeatList = [
        { id: 1, label: 'general.repeat.DAILY' },
        { id: 2, label: 'general.repeat.WEEKLY' }
        //{ id: 3, label: 'general.repeat.MONTHLY' } TODO: Not supported for now
    ];
    vm.workout.selectedRepeatType = _.first(vm.repeatList).id;

    for (var i = 1; i < 8; i++) {
        var day = { id: i, label: 'general.days.' + i };
        vm.days.push(day);
    }

    Workout.load(vm.workoutId, function(workout) {
        vm.workout = workout;
        if(!$scope.$$phase) {
            $scope.$apply();
        }
    });

    vm.showWeeklyLabel = function() {
        var parsedSelectedRepeatType = parseInt(vm.workout.selectedRepeatType),
            weeklyRepeatListId = _.findWhere(vm.repeatList, { label: 'general.repeat.WEEKLY' }).id;
        return parsedSelectedRepeatType === weeklyRepeatListId;
    };

    vm.saveWorkout = function (workoutModel) {
        saveEntity(workoutModel).then(function() {
            //notify and redirect or some other shit
        });
    };

    function saveEntity(workoutModel) {
        var deferred = $q.defer(),
         workout,
            repeatDaysArray = [];

        if (vm.workout.id) {
            workout = new Workout();
        }
        else {
            workout = vm.workout;
        }

        if (workout.title !== workoutModel.title) {
            workout.title = workoutModel.title;
        }

        if (workout.time !== workoutModel.time) {
            workout.time = workoutModel.time;
        }

        if (workout.repeat !== workoutModel.repeat) {
            workout.repeat = workoutModel.repeat;
        }

        if (workout.repeatType !== workoutModel.selectedRepeatType) {
            workout.repeatType = workoutModel.selectedRepeatType;
        }

        for(var propertyName in workoutModel.daysInWeek) {
            if (workoutModel.daysInWeek.hasOwnProperty(propertyName)) {
                var indexDayInWeek = parseInt(propertyName);
                repeatDaysArray.push(indexDayInWeek);
            }
        }

        if (repeatDaysArray && !_.includes(workout.repeatedDays, repeatDaysArray)) {
            workout.repeatedDays = repeatDaysArray;
        }

        persistence.flush(function() {
            deferred.resolve();
        });

        return deferred.promise;
    }

});
