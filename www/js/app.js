angular.module('arete.filters', []);
angular.module('arete.services', []);
angular.module('arete.directives', []);
angular.module('arete.controllers', []);

angular.module('arete', [
    'ionic',
    'ngCookies',
    'ngCordova',
    'pascalprecht.translate',
    'arete.filters',
    'arete.services',
    'arete.directives',
    'arete.controllers'
]).config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {
    'use strict';

    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('en-US');
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
    });

    $urlRouterProvider.otherwise('/index/home');

    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'js/index/partials/indMenu.html',
            controller: 'indMainCtrl',
            abstract: true
        })
        .state('index.home', {
            url: '/home',
            templateUrl: 'js/index/partials/indHome.html',
            controller: 'indMainCtrl'
        });

}]).
    run(['$rootScope', function($rootScope){
        'use strict';
    }]);