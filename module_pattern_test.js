// jshint.rc: https://github.com/jshint/jshint/blob/4c2d091b7e50ce2681ee48a104578bb969c189ae/examples/.jshintrc#L79
/* jshint -W097 */
/* jshint node: true */

'use strict';

var assert = require('assert');
var crypto = require('crypto');
var uuid = require('node-uuid');
var co = require('co');

function spawn_token_buf() {
    return function(callback) {
        crypto.randomBytes(48, callback);
    };
}

co(function* () {
    console.log((yield spawn_token_buf()).toString('base64'));
});

function run_module_tests(module) {
    console.log(typeof(module));

    console.log(module.get_var());
    console.log(module.get_id());

    console.log(module.get_id());
    console.log(module.get_var());
}

export function main(argc, argv) {
    var TestModule = require('./module_pattern');

    run_module_tests(TestModule);

    spawn_token_buf();
};
