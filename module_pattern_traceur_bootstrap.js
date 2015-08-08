// jshint.rc: https://github.com/jshint/jshint/blob/4c2d091b7e50ce2681ee48a104578bb969c189ae/examples/.jshintrc#L79
/* jshint -W097 */
/* jshint node: true */

/**
 * Entry point for running a node app as ES6
 */
'use strict';

// Force traceur's 'require' to override node's
var traceur = require('traceur');

// Check against path to ensure we don't run anything in 'node_modules'
// through traceur
traceur.require.makeDefault(function(file) {
    return file.indexOf('node_modules') == -1;
});

require('./module_pattern_test').main(process.argv.length, process.argv);
