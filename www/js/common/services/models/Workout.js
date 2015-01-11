angular.module('arete.services').factory('Workout', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get(),
        apiUrl = settings.apiUrl,
        ormName = 'Workout',
        modelUri = ormName.charAt(0).toLowerCase() + ormName.substring(1);

    var model = persistence.define(ormName, {
        code: 'TEXT',
        title: 'TEXT'
    });

    model.enableSync(apiUrl + modelUri);

    return model;

});