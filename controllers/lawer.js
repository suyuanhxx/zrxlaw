/**
 * Created by xiaoxu.huang on 2016/12/15.
 */

var Lawer = require('../models/lawer.js');

exports.saveLawer = function (req, res) {
    var lawer = new Lawer();
    lawer.name = "zhangsan";
    lawer.chineseName = "zhangsan";
    lawer.age = 25;
    lawer.phone = "1342342";
    lawer.save(lawer, res);
    res.render('./team.html');
};
