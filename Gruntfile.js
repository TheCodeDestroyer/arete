module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            compile: {
                files: {
                    'public/css/bootstrap.css': 'public/css/bootstrap/bootstrap.scss'
                }
            }
        },
        jshint: {
            all: {
                src: ['Gruntfile.js',
                    'www/js/**/*.js'
                ],
                options: {
                    jshintrc: true
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        coveralls: {
            options: {
                coverageDir: 'www/test/coverage/'
            }
        },
        watch: {
            files: ['Gruntfile.js',
                'www/js/**/*.js'
            ],
            tasks: ['jshint']
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [
                    {
                        expand: true,
                        src: ['www/js/**/*.js'],
                        ext: '.annotated.js',
                        dest: 'www/js/temp/',
                        extDot: 'last'
                    }
                ]
            }
        },
        uglify: {
            app: {
                files: {
                    'build/www/js/appBundle.min.js': ['www/js/**/**.js', '!www/js/temp/']

                }
            },
            vendor: {
                files: {
                    'build/www/js/vendorBundle.min.js': [
                        'www/lib/ionic/js/ionic.bundle.js',
                        'www/lib/angular-cookies/angular-cookies.js',
                        'www/lib/ngCordova/dist/ng-cordova.js',
                        'www/lib/angular-translate/angular-translate.js',
                        'www/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
                        'www/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
                        'www/lib/angular-translate-storage-local/angular-translate-storage-local.js',
                        'www/lib/ngstorage/ngStorage.js'
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [


                    // includes files within path and its sub-directories
                    {expand: true, src: ['www/i18n/**'], dest: 'build/'},
                    {expand: true, src: ['www/img/**'], dest: 'build/'},
                    {expand: true, src: ['www/res/**'], dest: 'build/'},
                    {expand: true, src: ['www/i18n/**'], dest: 'build/'},
                    {expand: true, src: ['www/i18n/**'], dest: 'build/'},
                    {src: ['www/config.xml'], dest: 'build/'},
                    {src: ['www/icon.png'], dest: 'build/'},
                    {src: ['www/index.html'], dest: 'build/'}
                ]
            }
        },
        clean: {
            build: ['www/js/temp/'],
            release: ['build/']
        },
        bumpup: {
            options: {
                dateFormat: 'DD.MM.YYYY HH:mm',
                normalize: true,
                updateProps: {
                    pkg: 'package.json'
                }
            },
            setters: {
                version: function (oldVersion) {
                    var semver = require('semver'),
                        newVersion = oldVersion,
                        currentDateVersionArray = getDateVersion().split('.'),
                        oldVersionArray = oldVersion.split('.'),
                        currentMonth = parseInt(currentDateVersionArray[0]),
                        oldMonth = parseInt(oldVersionArray[1]);

                    if (currentMonth > oldMonth) {
                        newVersion = semver.inc(newVersion, 'minor');
                    }

                    var currentDay = parseInt(currentDateVersionArray[1]);
                    var oldDay = parseInt(oldVersionArray[2].split('-')[0]);
                    if (currentDay > oldDay) {
                        newVersion = semver.inc(newVersion, 'patch');
                    }

                    newVersion = semver.inc(newVersion, 'prerelease');

                    return newVersion;
                },
                date: function (oldDate, releaseType, options) {
                    var moment = require('moment');
                    return moment.utc().format(options.dateFormat);
                }
            },
            files: ['package.json', 'bower.json']
        },
        phonegap: {
            config: {
                root: 'build',
                config: {
                    template: 'www/configTemplate.xml',
                    data: {
                        id: 'org.tcd.arete',
                        version: grunt.file.readJSON('package.json').version,
                        name: grunt.file.readJSON('package.json').name
                    }
                },
                cordova: '.cordova',
                html: 'index.html', // (Optional) You may change this to any other.html
                path: 'build',
                cleanBeforeBuild: true, // when false the build path doesn't get regenerated
                plugins: [
                    'https://github.com/millerjames01/Cordova-SQLitePlugin.git',
                    'https://github.com/driftyco/ionic-plugins-keyboard.git',
                    'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git'],
                platforms: ['android'],
                maxBuffer: 200, // You may need to raise this for iOS.
                verbose: false,
                releases: 'releases',
                releaseName: function () {
                    var pkg = grunt.file.readJSON('package.json');
                    return(pkg.name + '-' + pkg.version);
                },
                debuggable: true,

                // Must be set for ios to work.
                // Should return the app name.
                name: function () {
                    var pkg = grunt.file.readJSON('package.json');
                    return pkg.name;
                },

                // Add a key if you plan to use the `release:android` task
                // See http://developer.android.com/tools/publishing/app-signing.html
                key: {
                    store: 'release.keystore',
                    alias: 'release',
                    aliasPassword: function () {
                        // Prompt, read an environment variable, or just embed as a string literal
                        return('');
                    },
                    storePassword: function () {
                        // Prompt, read an environment variable, or just embed as a string literal
                        return('');
                    }
                },

                // Set an app icon at various sizes (optional)
                icons: {
                    android: {
                        ldpi: 'icon-36-ldpi.png',
                        mdpi: 'icon-48-mdpi.png',
                        hdpi: 'icon-72-hdpi.png',
                        xhdpi: 'icon-96-xhdpi.png'
                    },
                    wp8: {
                        app: 'icon-62-tile.png',
                        tile: 'icon-173-tile.png'
                    },
                    ios: {
                        icon29: 'icon29.png',
                        icon29x2: 'icon29x2.png',
                        icon40: 'icon40.png',
                        icon40x2: 'icon40x2.png',
                        icon57: 'icon57.png',
                        icon57x2: 'icon57x2.png',
                        icon60x2: 'icon60x2.png',
                        icon72: 'icon72.png',
                        icon72x2: 'icon72x2.png',
                        icon76: 'icon76.png',
                        icon76x2: 'icon76x2.png'
                    }
                },

                // Set a splash screen at various sizes (optional)
                // Only works for Android and IOS
                screens: {
                    android: {
                        ldpi: 'screen-ldpi-portrait.png',
                        // landscape version
                        ldpiLand: 'screen-ldpi-landscape.png',
                        mdpi: 'screen-mdpi-portrait.png',
                        // landscape version
                        mdpiLand: 'screen-mdpi-landscape.png',
                        hdpi: 'screen-hdpi-portrait.png',
                        // landscape version
                        hdpiLand: 'screen-hdpi-landscape.png',
                        xhdpi: 'screen-xhdpi-portrait.png',
                        // landscape version
                        xhdpiLand: 'www/screen-xhdpi-landscape.png'
                    },
                    ios: {
                        // ipad landscape
                        ipadLand: 'screen-ipad-landscape.png',
                        ipadLandx2: 'screen-ipad-landscape-2x.png',
                        // ipad portrait
                        ipadPortrait: 'screen-ipad-portrait.png',
                        ipadPortraitx2: 'screen-ipad-portrait-2x.png',
                        // iphone portrait
                        iphonePortrait: 'screen-iphone-portrait.png',
                        iphonePortraitx2: 'screen-iphone-portrait-2x.png',
                        iphone568hx2: 'screen-iphone-568h-2x.png'
                    }
                },

                // Android-only integer version to increase with each release.
                // See http://developer.android.com/tools/publishing/versioning.html
                versionCode: function () {
                    var pkg = grunt.file.readJSON('package.json');
                    return pkg.version;
                },

                // Android-only options that will override the defaults set by Phonegap in the
                // generated AndroidManifest.xml
                // See https://developer.android.com/guide/topics/manifest/uses-sdk-element.html
                minSdkVersion: function () {
                    return(16);
                },
                targetSdkVersion: function () {
                    return(19);
                },

                // iOS7-only options that will make the status bar white and transparent
                iosStatusBar: 'WhiteAndTransparent',

                // If you want to use the Phonegap Build service to build one or more
                // of the platforms specified above, include these options.
                // See https://build.phonegap.com/
                remote: {
//                    username: process.env['PGB_USERNAME'],
                    username: '',
//                    password: process.env['PGB_PASSWORD'],
                    password: '',
                    platforms: []
//                    platforms: ['android', 'blackberry', 'ios', 'symbian', 'webos', 'wp7']
                },

                // Set an explicit Android permissions list to override the automatic plugin defaults.
                // In most cases, you should omit this setting. See 'Android Permissions' in README.md for details.
                permissions: ['INTERNET', 'ACCESS_COURSE_LOCATION', '...']
            }
        }

    });

    function getDateVersion(){
        var versionDateFormat = 'MM.DD';
        var moment = require('moment');
        return moment.utc().format(versionDateFormat);
    }

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-phonegap');
    grunt.loadNpmTasks('grunt-bumpup');

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-karma-coveralls');

    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('build', [
        'clean:release',
        'test',
        //'sass',
        'ngAnnotate',
        'copy',
        'uglify',
        'clean:build',
        'phonegap',
        'clean:release'
    ]);
};