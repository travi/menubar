/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-buster');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');

    // Project configuration.
    grunt.initConfig({
        clean: ['client/css'],

        jslint: {
            dist: {
                src: [
                    'js/**/*.js'
                ],
                directives: {
                    browser: true,
                    predef: [
                        '$',
                        'jQuery',
                        'Modernizr',
                        'amplify',
                        'travi'
                    ]
                },
                options: {
                    errorsOnly: true,
                    checkstyle: 'build/logs/jslint-dist.xml'
                }
            },
            test: {
                src: [
                    'grunt.js',
                    'test/**/*.jstd'
                ],
                directives: {
                    browser: true,
                    unparam: true,
                    predef: [
                        '$',
                        'jQuery',
                        'Modernizr',
                        'amplify',
                        'travi',

			'testCase',
                        'sinon',
                        'assertEquals',
                        'assertSame',
                        'assertNotSame',
                        'assertString',
                        'assertObject',
                        'assertFunction',
                        'assert',
                        'refute',
                        'assertFalse',
                        'assertTrue',
                        'expectAsserts'
                    ]
                },
                options: {
                    errorsOnly: true,
                    checkstyle: 'build/logs/jslint-test.xml'
                }
            }
        },

        karma: {
            menuBar: {
                configFile: 'karma.conf.js',
                singleRun: true,

                reporters: [
                    'progress',
                    'junit'
                ],

                junitReporter: {
                    outputFile: 'logs/karma.xml'
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['jslint', 'karma']);
};
