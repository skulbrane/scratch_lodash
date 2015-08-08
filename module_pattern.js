// jshint.rc: https://github.com/jshint/jshint/blob/4c2d091b7e50ce2681ee48a104578bb969c189ae/examples/.jshintrc#L79
/* jshint -W097 */ // Disable
/* jshint node: true */

/**
 * Demonstrate module pattern
 *
 *   * Global module
 *
 *   * Note that functions beginning with the token 'function' are always
 *     considered **function declarations**. '()' specifies a **function expression**.
 *
 *   * Globals exported using anonymous function's **return value**
 */

'use strict';

var uuid = require('node-uuid');
var assert = require('assert');
var _ = require('lodash');

var TestModule = (function(uuid, assert, _) {
    var my = {},
        var_ = 1,
        id_ = uuid.v4();
    my.get_var = function() { return var_; };
    my.set_var = function(val) { var_ = val; };

    function _setid(id)
    {
        id_ = id;
    }
    my.get_id = function()
    {
        return id_;
    };

    function _method() {
        return "Private Method";
    }

    my.module_property = 1;
    my.module_method = function() {
        return "Public Method";
    };

    my.gen_ids = function(n, prefix) {
        assert(typeof(prefix) === 'string');
         _.times(n, _.partial(_.uniqueId, prefix));
    };

    return my;
}(uuid, assert, _));

module.exports = TestModule;
