// jshint.rc: https://github.com/jshint/jshint/blob/4c2d091b7e50ce2681ee48a104578bb969c189ae/examples/.jshintrc#L79
/* jshint -W097 */
/* jshint node: true */

'use strict';

var _ = require('lodash');
var assert = require('assert');

var items_sold = [
    { article: 41, quantity: 24 },
    { article: 2323, quantity: 2 },
    { article: 655, quantity: 23 }
];

function getCmdArg(idx)
{
    assert(idx > 0 && idx < process.argv.length);
    return process.argv[idx];
}

var workers = [
    function(items) {
        return _.sortBy(items, 'quantity').reverse();
    },

    function(items) {
        return _.sortBy(items, function(item) {
            return -item.quantity;
        });
    }
];

function getWorker(idx)
{
    assert(idx >= 0 && idx < workers.length, "worker index out of range");
    console.log("selecting worker #" + idx + workers[idx].id);
    return workers[idx];
}

function test_worker(worker, log)
{
    assert(typeof(worker) === 'function', "worker not a valid function");
    log = Boolean(log) || false;

    var items_sorted_dsc = worker(items_sold);
    if (log)
    {
        console.log(items_sorted_dsc);
    }

    _.times(items_sold.length-2, function(n) {
        assert(items_sorted_dsc[n].quantity > items_sorted_dsc[n+1].quantity);
    });
}

var worker = getWorker(0);
// $script <worker> <log[0|1]>
function main(argc, argv)
{
    if (argc >= 3 && Number(getCmdArg(2)) > 0 && Number(getCmdArg(3)) < workers.length)
        worker = getWorker(Number(getCmdArg(3)));


    if (argc == 4 && Number(getCmdArg(3)))
        test_worker(worker, true);
    else
        test_worker(worker);
}

main(process.argv.length, process.argv);

console.log(worker);
module.exports = worker;
