// Karma configuration
// Generated on Sun Jan 18 2015 16:12:30 GMT+0100 (CET)

module.exports = function(config) {
  'use strict';

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/chai/chai.js',
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/lib/angular-cookies/angular-cookies.js',
      'www/lib/ngCordova/dist/ng-cordova.js',
      'www/lib/orm.js/lib/persistence.js',
      'www/lib/orm.js/lib/persistence.sync.js',
      'www/lib/orm.js/lib/persistence.store.sql.js',
      'www/lib/orm.js/lib/persistence.store.websql.js',
      'www/lib/angular-translate/angular-translate.js',
      'www/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'www/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'www/lib/angular-translate-storage-local/angular-translate-storage-local.js',
      'www/lib/lodash/dist/lodash.js',
      'www/lib/ngstorage/ngStorage.js',
      'www/js/**/*.js',
      'www/test/unit/controllers/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'www/js/**/*.js': ['coverage']
    },

    coverageReporter: {
      type: 'html',
      dir: 'www/test/coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'progress',
      'mocha',
      'coverage'
    ],

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-coverage'
    ],

    mochaReporter: {
      output: 'autowatch'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
