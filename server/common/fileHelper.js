/**
 * Created by xiaoxu.huang on 2017/3/10.
 */
/**
 * 文件上传，阿里OSS
 */
'use strict';
var fs = require('fs');
var logger = require('../common/logger');
// var client = Client({
//     accessKeyId: 'LTAIuBSH1GS9KA6Q',
//     accessKeySecret: 'JS9cFycoEzx4VTMv6OpDpGvY7zhxJ3',
//     bucket: 'zrxlaw',
//     region: 'oss-cn-shanghai'
// });
/**
 * 本地文件上传功能
 */
exports.fileUpLoad = function (file, callback) {
    fs.readFile('server/logs/zrxlaw.log', function (err, data) {
        if (err) {
            logger.error(err);
        }
        callback(err, data);
    });

};


exports.uploadAliOSS = function (file, callback) {
    var filepath = 'server/logs/zrxlaw.log';
    // var object = yield store.put('ossdemo/zrxlaw.log', filepath);
    callback(result);
};