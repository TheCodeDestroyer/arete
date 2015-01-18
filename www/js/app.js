angular.module('arete.filters', []);
angular.module('arete.services', []);
angular.module('arete.directives', []);
angular.module('arete.controllers', []);

angular.module('arete', [
    'ionic',
    'pascalprecht.translate',
    'ngStorage',
    'ngCordova',
    'ngCookies',
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

    persistence.debug = false;
    persistence.store.cordovasql.config(
        persistence,
        'Arete',
        '0.0.5',
        'Arete',
        50 * 1024 * 1024,
        0
    );

    $urlRouterProvider.otherwise('/index/home');

    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'js/common/partials/cmnMenu.html',
            controller: 'cmnMenuCtrl as cmnMenu',
            abstract: true
        })
        .state('index.home', {
            url: '/home',
            views: {
                'content': {
                    templateUrl: 'js/home/partials/hmHome.html',
                    controller: 'hmHomeCtrl as hmHome'
                }
            }});

}]).
    run(['$rootScope', function() {//$rootScope){
        'use strict';

        //$rootScope.$on('$routeChangeStart', function(event, next) {
        //    var requireLogin = next.requireLogin === undefined || next.requireLogin;
        //    if (requireLogin && !cmnAuthenticationSvc.isAuthenticated()) {
        //        $state.go('login');
        //        event.preventDefault();
        //    }
        //});
    }]);