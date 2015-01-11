angular.module('arete.services').factory('Setting', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get(),
        apiUrl = settings.apiUrl,
        ormName = 'Setting',
        modelUri = ormName.charAt(0).toLowerCase() + ormName.substring(1);

    var model = persistence.define(ormName, {
        nameCode: 'TEXT',
        value: 'TEXT'
    });

    model.enableSync(apiUrl + modelUri);

    return model;

});