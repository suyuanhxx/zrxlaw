/**
 * Created by xiaoxu.huang on 2017/2/15.
 */

var logger = require('../common/logger');

exports.index = function (req, res) {
    res.render('index.html');
};

/**
 * 静态资源路由
 * @param req
 * @param res
 */
exports.static = function (req, res) {
    res.render(req.path.toString().slice(1));
};