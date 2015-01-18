angular.module('arete.controllers').controller('wrkDetailCtrl', function ($state, $stateParams) {
    'use strict';

    var vm = this;
    vm.workoutId = $stateParams.id;

});
