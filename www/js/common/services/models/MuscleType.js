angular.module('arete.services').factory('MuscleType', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get(),
        apiUrl = settings.apiUrl,
        ormName = 'MuscleType',
        modelUri = ormName.charAt(0).toLowerCase() + ormName.substring(1);

    var model = persistence.define(ormName, {
        code: 'INT',
        name: 'TEXT'
    });

    model.enableSync(apiUrl + modelUri);

    return model;
});