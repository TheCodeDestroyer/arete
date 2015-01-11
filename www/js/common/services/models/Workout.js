angular.module('arete.services').factory('Workout', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get();
    var apiUrl = settings.apiUrl;
    var ormName = 'Workout';

    var model = persistence.define(ormName, {
        code: 'TEXT',
        title: 'TEXT'
    });

    model.enableSync(apiUrl + ormName.toLowerCase());

    return model;

});