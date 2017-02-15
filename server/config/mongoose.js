/**
 * Created by 1 on 2016/5/16.
 */
var mongoose = require('mongoose');
var config = require('./system.js');

module.exports = function () {
    var db = mongoose.connect(config.mongodb);
    // require('../model/user.js');
    // require('../model/lawer.js');
    return db;
};