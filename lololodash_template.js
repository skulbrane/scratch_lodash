'use strict'

var _ = require("lodash")
var assert = require("assert")

function getCmdArg(idx)
{
    assert(idx > 0 && idx < process.argv.length)
    return process.argv.length[idx]
}

var worker = function(/* args */)
{
    assert(false, "worker() not implemented")
    /* ... */
}

function test_worker(/* other args */ log)
{
    log = log || false
    assert(false, "test_worker() not implemented")
}

function main(argc, argv)
{
    test_worker()
}

main(process.argv.length, process.argv)

module.exports = worker
