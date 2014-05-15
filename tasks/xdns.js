/*
 * grunt-edns
 * https://github.com/allenm/grunt-edns
 *
 * Copyright (c) 2014 Allen.M
 * Licensed under the MIT license.
 */

'use strict';

var xdns = require('xdns');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('xdns', 'grunt task for xdns', function() {
//    var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    if(options.keepalive){
        var done = this.async();
    }

    xdns.init(options);


  });

};
