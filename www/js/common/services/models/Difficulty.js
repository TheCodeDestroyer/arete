angular.module('arete.services').factory('Difficulty', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get();
    var apiUrl = settings.apiUrl;
    var ormName = 'Difficulty';

    var model = persistence.define(ormName, {
        code: 'INT',
        name: 'TEXT'
    });

    model.enableSync(apiUrl + ormName.toLowerCase());

    return model;

});