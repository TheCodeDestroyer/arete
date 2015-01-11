angular.module('arete.services').factory('ExerciseSetting', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get(),
        apiUrl = settings.apiUrl,
        ormName = 'ExerciseSetting',
        modelUri = ormName.charAt(0).toLowerCase() + ormName.substring(1);

    var model = persistence.define(ormName, {
        code: 'TEXT',
        title: 'TEXT'
    });

    model.enableSync(apiUrl + modelUri);

    return model;

});