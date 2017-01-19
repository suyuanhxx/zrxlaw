/**
 * Created by 1 on 2017/1/10.
 */
/* GET home page. */
exports.index = function (req, res) {
    res.render('index1.html');
};

/**
 * 静态资源路由
 * @param req
 * @param res
 */
exports.static = function (req, res) {
    res.render(req.path.toString().slice(1));
};