angular.module('arete.services').service('cmnSessionSvc', function () {

    function create(accountId, username, sessionId) {
        this.sessionId = sessionId;
        this.accountId = accountId;
        this.username = username;
    }

    function destroy() {
        this.id = null;
        this.accountId = null;
        this.username = null;
    }
    return {
        create: create,
        destroy: destroy
    };
});