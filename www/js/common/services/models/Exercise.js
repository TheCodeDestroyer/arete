angular.module('arete.services').factory('Exercise', function(cmnSettingsSvc) {
    'use strict';


    var settings = cmnSettingsSvc.get(),
        apiUrl = settings.apiUrl,
        ormName = 'Exercise',
        modelUri = ormName.charAt(0).toLowerCase() + ormName.substring(1);

    var model = persistence.define(ormName, {
        nameCode: 'TEXT',
        muscleType: 'INT',
        difficulty: 'INT'
    });

    model.enableSync(apiUrl + modelUri);

    return model;

});