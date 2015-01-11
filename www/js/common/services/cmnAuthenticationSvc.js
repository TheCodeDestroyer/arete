angular.module('arete.services').factory('cmnAuthenticationSvc', function($http, cmnSessionSvc, cmnSettingsSvc){
    'use strict';

    function login(credentials) {

        var settings = cmnSettingsSvc.get();
        var apiUrl = settings.apiUrl;

        if (!apiUrl && apiUrl === '') {
            return undefined;
        }

        return $http.post(apiUrl + '/login', credentials)
            .then(function (response) {
                var userData = response.data;
                cmnSessionSvc.create(userData.accountId, userData.username, userData.sessionId );
            });
    }

    function logout() {
        cmnSessionSvc.destroy();
    }

    function isAuthenticated () {
        return !!cmnSessionSvc.sessionId;
    }

    return {
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
});