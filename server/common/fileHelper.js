/**
 * Created by xiaoxu.huang on 2017/3/10.
 */
var fs = require('fs');
var logger = require('../common/logger');
var oss = require('ali-oss');
var co = require('co');
var client = oss({
    accessKeyId: 'LTAIuBSH1GS9KA6Q',
    accessKeySecret: 'JS9cFycoEzx4VTMv6OpDpGvY7zhxJ3',
    bucket: 'zrxlaw',
    region: 'oss-cn-shanghai'
});
/**
 * 文件上传功能
 */
exports.fileUpLoad = function (file, callback) {
    // var hash = crypto.createHash('md5');
    // fs.readFile('server/logs/zrxlaw.log', function (err, data) {
    //     if (err) {
    //         logger.error(err);
    //     }
    //     hash.update(data);
    //     callback(err, data);
    // });
    var filepath = 'server/logs/zrxlaw.log';
    // var object = yield store.put('ossdemo/demo.txt', filepath);
    // console.log(object);

    co(function* () {
        yield client.put('ossdemo/zrxlaw.log', filepath);

    }).catch(function (err) {
        console.log(err);
    });
};