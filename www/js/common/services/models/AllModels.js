angular.module('arete.services').factory('AllModels', function(Difficulty, DurationType, Exercise, ExerciseSetting, MuscleType, Repeat, Setting, Workout) {
    'use strict';

    var modelsForSync = [
        Difficulty,
        Exercise,
        ExerciseSetting,
        MuscleType,
        Repeat,
        Setting,
        Workout
    ];

    return {
        modelsForSync: modelsForSync
    };
});