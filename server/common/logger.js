var config = require('../config');

var env = process.env.NODE_ENV || "development";


var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: 'server/logs/zrxlaw.log', category: 'zrxlaw' }
    ]
});

var logger = log4js.getLogger('cheese');
logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR');

module.exports = logger;