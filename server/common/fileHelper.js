/**
 * Created by xiaoxu.huang on 2017/3/10.
 */
var fs = require('fs');
var logger = require('../common/logger');
var crypto = require('crypto');
/**
 * 文件上传功能
 */
exports.fileUpLoad = function (file, callback) {
    fs.readFile('server/logs/zrxlaw.log', function (err, data) {
        if (err) {
            logger.error(err);
        }
        callback(err, data);
    });
};