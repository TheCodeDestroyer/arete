angular.module('arete.services').factory('Repeat', function(cmnSettingsSvc) {
    'use strict';

    var settings = cmnSettingsSvc.get();
    var apiUrl = settings.apiUrl;
    var ormName = 'Repeat';

    var model = persistence.define(ormName, {
        times: 'INT',
        durationType: 'INT'
    });

    model.enableSync(apiUrl + ormName.toLowerCase());

    return model;

});