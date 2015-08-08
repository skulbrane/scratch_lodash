'use strict'

var _ = require("lodash")
var assert = require("assert")

var userlist = [
    { id: 22, username: "martin", active: true },
    { id: 23, username: "max", active: false },
    { id: 24, username: "linda", active: false }
]

function getCmdArg(idx)
{
    assert(idx > 0 && idx < process.argv.length)
    return process.argv.length[idx]
}

var getActiveUsers = function(users)
{
    return _.where(users, {active: true})
}

function test_getActiveUsers(users, log)
{
    log = log || false

    var active_users = getActiveUsers(users)
    for (var i=0; i<active_users.length; i++)
    {
        var active_user = active_users[i]
        if (log)
            console.log(active_user.username + ":" + active_user.active)
        assert(active_user.active == true)
    }
}

function main(argc, argv)
{
    if (argc == 3 && getCmdArg(2) != 'undefined')
    {
        test_getActiveUsers(userlist, true)
    }
    test_getActiveUsers(userlist)
}

main(process.argv.length, process.argv)

module.exports = getActiveUsers
