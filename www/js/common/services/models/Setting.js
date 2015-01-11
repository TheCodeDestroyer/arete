angular.module('arete.services').factory('Setting', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get();
    var apiUrl = settings.apiUrl;
    var ormName = 'Setting';

    var model = persistence.define(ormName, {
        nameCode: 'TEXT',
        value: 'TEXT'
    });

    model.enableSync(apiUrl + ormName.toLowerCase());

    return model;

});