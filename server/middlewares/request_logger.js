var logger = require('./../common/logger');

var ignore = /^\/(public|agent)/;

exports = module.exports = function (req, res, next) {
    // Assets do not out log.
    if (ignore.test(req.url)) {
        next();
        return;
    }

    var t = new Date();
    var result = t.toLocaleDateString() + " "+ t.toLocaleTimeString();
    logger.info('\n\nStarted', result, req.method, req.url, req.ip);

    res.on('finish', function () {
        var duration = ((new Date()) - t);

        logger.info('Completed', res.statusCode, ('(' + duration + 'ms)'));
    });

    next();
};
