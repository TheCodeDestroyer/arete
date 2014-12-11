angular.module('arete.controllers').controller('hmHomeCtrl', ['$scope', '$translate', function($scope, $translate) {
    'use strict';

    $scope.viewTitle = $translate.instant('home.TITLE');

    $scope.menuItems = [
        { displayName: 'home.menu.START_WORKOUT', state: 'index.workout', icon: 'ion-play' },
        { displayName: 'home.menu.NEW_WORKOUT', state: 'index.workout.add', icon: 'ion-plus-round' },
        { displayName: 'home.menu.SCHEDULE', state: 'index.schedule', icon: 'ion-calendar' }
    ];

}]);