angular.module('arete.controllers').controller('hmHomeCtrl', ['$scope', '$translate', function($scope, $translate) {
    'use strict';

    $scope.viewTitle = $translate.instant('home.TITLE');

    $scope.menuItems = [
        { displayName: $translate.instant('home.START_WORKOUT'), state: 'index.home', icon: '' },
        { displayName: $translate.instant('menu.NEW_WORKOUT'), state: 'index.home', icon: '' },
        { displayName: $translate.instant('menu.SCHEDULE'), state: 'index.home', icon: '' }
    ];

}]);