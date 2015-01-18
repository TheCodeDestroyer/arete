angular.module('arete.services').service('Session', function () {
    'use strict';

    return {
        sessionId: undefined,
        accountId: undefined,
        username: undefined,
        create: function (accountId, username, sessionId) {
            this.sessionId = sessionId;
            this.accountId = accountId;
            this.username = username;
        },
        destroy: function () {
            this.sessionId = null;
            this.accountId = null;
            this.username = null;
        }
    };
});