/**
 * Created by xiaoxu.huang on 2017/2/17.
 */

var mongoose = require('mongoose');
var config = require('../config');
var logger = require('../common/logger');
var options = { promiseLibrary: require('bluebird') };

// Create the database connection
// mongoose.connect(config.mongodb);
mongoose.connect(config.mongodb, options);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    logger.info('Mongoose default connection open to ' + config.mongodb);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    logger.info('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    logger.info('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.info('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
