#!/usr/bin/env node

/**
 * Demonstrate cli programming with Node.js
 *
 *   * Use process.argv to access cmd args
 *
 *   * Set exit code with process.exit(n)
 *      * 0 for success, any other to indicate error code
 *
 *   * Receive piped data like so:
 *      process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', function(data) {
            process.stdout.write(data);
        });
 */

function get_cmd_arg(idx) {
    return process.argv.split(2);
}

function get_cmd_arg_max() {
     return process.argv.length-2;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
     process.stdout.write(data);
});


