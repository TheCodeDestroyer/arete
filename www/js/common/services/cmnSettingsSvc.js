angular.module('arete.services').service('cmnSettingsSvc', function ($localStorage) {
    'use strict';

    function get() {
        if (!$localStorage.userSettings) {
            prepareDefaultSettings();
        }

        return $localStorage.userSettings;
    }

    function prepareDefaultSettings() {
        $localStorage.$default({
            userSettings: {
                apiUrl: 'http://arete-api.herokuapp.com/api/'
            }
        });
    }

    function save(settings) {
        $localStorage.userSettings = settings;
    }

    return {
        get: get,
        save: save
    };
});