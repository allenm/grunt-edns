/*
 * grunt-xdns
 * https://github.com/allenm/grunt-xdns
 *
 * Copyright (c) 2014 Allen.M
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    xdns: {
        qa:{
            options:{
                dns:'10.232.24.196',
                keepalive:true,
                hostsArr:['10.68.110.131 www.qq.com']
            }
        },
        online:{
            options:{
                dns:'8.8.8.8'
            }
        }
    },
      watch: {
          scripts: {
              files: ['tasks/*.js'],
              tasks: ['jshint'],
              options: {
                  spawn: false,
              },
          },
      },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'xdns', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

  grunt.registerTask('e',['xdns:qa']);


};
