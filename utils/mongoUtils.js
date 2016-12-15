//


var dburl = require("../config").db;//数据库地址
var mongoose = require('mongoose');

exports.connect = function (callback) {
    mongoose.connect(dburl);
};

exports.mongoObj = function () {
    return mongoose;
};

/// create a connection to the DB
exports.CreateConnection = function (callback, returnFunc) {
    var connection = mongoose.createConnection(dburl);

    connection.on('open', function () {
        callback(connection, returnFunc);
    });
};
