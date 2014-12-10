angular.module('arete.services').service('cmnSettingsSvc',['$localStorage', function ($localStorage) {

    function get() {
        if (!$localStorage.userSettings) {
            prepareDefaultSettings();
        }

        return $localStorage.userSettings;
    }

    function prepareDefaultSettings() {
        $localStorage.$default({
            userSettings: {
                apiUrl: 'http:blabla'
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
}]);