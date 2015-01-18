angular.module('arete.services').factory('DurationType', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get(),
        apiUrl = settings.apiUrl,
        ormName = 'DurationType',
        modelUri = ormName.charAt(0).toLowerCase() + ormName.substring(1);

    var model = persistence.define(ormName, {
        code: 'INT',
        name: 'TEXT'
    });

    model.enableSync(apiUrl + modelUri);

    return model;
});