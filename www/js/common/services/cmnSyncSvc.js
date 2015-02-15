angular.module('arete.services').factory('cmnSyncSvc', function($q, $rootScope, $translate, $ionicPopup, AllModels){
    'use strict';

    //TODO: Clean this up a bit, maybe create a progress bar directive and implement proper translations
    var $scope = $rootScope.$new(),
        entities = AllModels.modelsForSync,
        syncLogPopup,
        syncCounter = 0;
    $scope.syncLog = {};

    function sync() {
        var deferred = $q.defer(),
         title = 'SYNC',
            template = 'SYNC?',
            confirmPopup = $ionicPopup.confirm({
                title: title,
                template: template
            });

        confirmPopup.then(function(res) {
            if(res) {
                syncData().then(function (){
                    //syncLogPopup.close();
                    deferred.resolve({ canceled: false });
                }, function(){
                    //syncLogPopup.close();
                    showSyncError();
                    deferred.resolve({ canceled: false });
                });
            } else {
                deferred.resolve({ canceled: true });
            }
        });

        return deferred.promise;
    }


    function syncData() {
        var deferred = $q.defer();

        syncCounter = 0;
        updateSyncLog(entities.length, syncCounter+1);
        showSyncLog();
        persistence.schemaSync();

        syncProgress(deferred);

        return deferred.promise;
    }

    function syncProgress(deferred) {

        var entity = entities[syncCounter];

        entity.syncAll(persistence.sync.preferRemoteConflictHandler,
            function () {
                syncCounter++;
                if(syncCounter === entities.length){
                    deferred.resolve();
                }
                else {
                    updateSyncLog(entities.length, syncCounter+1);
                    syncProgress(deferred);
                }
            },
            function () {
                resetDb();
                deferred.reject();
            }
        );
    }

    function resetDb() {
        persistence.reset(function() {
            console.log('\n \n DB Reset!');
        });
    }

    function showSyncError(){
        var title = 'YOURE FUCKED',
            description = 'HAVE YOU EVER BEEN FUCKED? ITS BAD....';

        $ionicPopup.alert({
            template: description,
            title: title
        });
    }

    function showSyncLog(){
        //TODO: Think about how to resolve stupid translation promises
        var title = 'sync.TITLE',
            subTitle = 'general.PLEASE_WAIT';
        syncLogPopup = $ionicPopup.show({
            templateUrl: 'js/common/partials/cmnSyncLog.html',
            title: title + ' <i class="icon ion-loading-a"></i>',
            subTitle: subTitle,
            scope: $scope
        });
    }

    function updateSyncLog(totalTables, syncCounter){
        $scope.syncLog.totalTables = totalTables;
        $scope.syncLog.syncCounter = syncCounter;
        if(!$scope.$$phase) {
            $scope.$digest();
        }
    }

    return {
        resetDb: resetDb,
        sync: sync
    };
});