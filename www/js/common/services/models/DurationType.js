angular.module('arete.services').factory('DurationType', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get();
    var apiUrl = settings.apiUrl;
    var ormName = 'DurationType';

    var model = persistence.define(ormName, {
        code: 'INT',
        name: 'TEXT'
    });

    model.enableSync(apiUrl + ormName.toLowerCase());

    return model;

});