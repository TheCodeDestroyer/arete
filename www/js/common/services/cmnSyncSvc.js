angular.module('arete.services').factory('cmnSyncSvc', function($rootScope, $translate, $ionicPopup, AllModels){
    'use strict';

    //TODO: Clean this up a bit, maybe create a progress bar directive and implement proper translations
    var $scope = $rootScope.$new(),
        entities = AllModels.modelsForSync,
        syncLogPopup,
        syncCounter = 0;

    function sync(success, cancel) {

        var title = 'SYNC',
            template = 'SYNC?',
            confirmPopup = $ionicPopup.confirm({
                title: title,
                template: template
            });

        confirmPopup.then(function(res) {
            if(res) {
                showSyncLog();
                syncData(function (){
                    syncLogPopup.close();
                    success();
                }, function(){
                    syncLogPopup.close();
                    showSyncError();
                });
            } else {
                cancel();
            }
        });
    }


    function syncData(callback, errorCallback) {
        syncCounter = 0;
        updateSyncLog(entities.length, syncCounter+1);
        persistence.schemaSync();

        syncProgress(callback, errorCallback);
    }

    function syncProgress(callback, errorCallback) {

        var entity = entities[syncCounter];

        entity.syncAll(persistence.sync.preferRemoteConflictHandler,
            function () {
                syncCounter++;
                if(syncCounter === entities.length){
                    callback();
                }
                else {
                    updateSyncLog(entities.length, syncCounter+1);
                    syncProgress(callback, errorCallback);
                }
            },
            function () {
                resetDb();
                errorCallback();
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
        var title = 'SYNCHRONISING',
            subTitle = 'PLEASE_WAIT';
        syncLogPopup = $ionicPopup.show({
            templateUrl: 'js/common/partials/cmnSyncLog.html',
            title: title + ' <i class="icon ion-loading-a"></i>',
            subTitle: subTitle,
            scope: $scope
        });
    }

    function updateSyncLog(totalTables, syncCounter){
        $scope.totalTables = totalTables;
        $scope.syncCounter = syncCounter;
        if(!$scope.$$phase) {
            $scope.$digest();
        }
    }

    return {
        resetDb: resetDb,
        sync: sync
    };
});