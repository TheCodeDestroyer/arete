angular.module('arete.filters', []);
angular.module('arete.services', []);
angular.module('arete.directives', []);
angular.module('arete.controllers', []);

angular.module('arete', [
    'ionic',
    'pascalprecht.translate',
    'ngStorage',
    'ngCordova',
    'ionic',
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
            templateUrl: 'js/common/partials/cmnMenu.html',
            controller: 'cmnMenuCtrl',
            abstract: true
        })
        .state('index.home', {
            url: '/home',
            templateUrl: 'js/home/partials/indHome.html',
            controller: 'indMainCtrl'
        });

}]).
    run(['$rootScope', function($rootScope){
        'use strict';

        $rootScope.$on('$routeChangeStart', function(event, next) {
            var requireLogin = next.requireLogin === undefined || next.requireLogin;
            if (requireLogin && !cmnAuthenticationSvc.isAuthenticated()) {
                $state.go('login');
                event.preventDefault();
            }
        });
    }]);