angular.module('arete.services').factory('cmnAuthenticationSvc', function($http, Session, cmnSettingsSvc){
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
                Session.create(userData.accountId, userData.username, userData.sessionId );
            });
    }

    function logout() {
        Session.destroy();
    }

    function isAuthenticated () {
        return !!Session.sessionId;
    }

    return {
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
});