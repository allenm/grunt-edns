/*
 * grunt-edns
 * https://github.com/allenm/grunt-edns
 *
 * Copyright (c) 2014 Allen.M
 * Licensed under the MIT license.
 */

'use strict';

var edns = require('edns');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('edns', 'grunt task for edns', function() {
//    var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    if(options.keepalive){
        var done = this.async();
    }

    edns.init(options);


  });

};
