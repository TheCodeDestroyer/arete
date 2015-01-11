angular.module('arete.services').factory('Exercise', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get();
    var apiUrl = settings.apiUrl;
    var ormName = 'Exercise';

    var model = persistence.define(ormName, {
        nameCode: 'TEXT',
        muscleType: 'INT',
        difficulty: 'INT'
    });

    model.enableSync(apiUrl + ormName.toLowerCase());

    return model;

});