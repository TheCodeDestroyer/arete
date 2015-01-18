angular.module('arete.services').factory('Repeat', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get(),
        apiUrl = settings.apiUrl,
        ormName = 'Repeat',
        modelUri = ormName.charAt(0).toLowerCase() + ormName.substring(1);

    var model = persistence.define(ormName, {
        times: 'INT',
        durationType: 'INT'
    });

    model.enableSync(apiUrl + modelUri);

    return model;
});