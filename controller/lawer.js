/**
 * Created by 1 on 2017/1/10.
 * @author huangxiaoxu
 */
// lawer
var mongoose = require('mongoose');
require('../model/lawer');
var Lawer = mongoose.model('Lawer');
var tools = require('../common/tools');

//获取所有用户
exports.getLawers = function (req, res) {
    Lawer.find({}, function (err, docs) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": docs});
    })
};

exports.addLawer = function (req, res) {
    var newLawer = new Lawer();
    console.log(tools.generatorUsername());
    newLawer.username = tools.generatorUsername();
    newLawer.lawerName = req.body.lawerName;
    newLawer.nickname = req.body.nickname;
    newLawer.avatar = req.body.avatar;
    newLawer.gender = req.body.gender;
    newLawer.age = req.body.age;
    newLawer.phone = req.body.phone;
    newLawer.wechatId = req.body.wechatId;
    newLawer.email = req.body.email;
    newLawer.description = req.body.description;
    newLawer.position = req.body.position;
    newLawer.joinTime = Date.now();
    newLawer.status = 1;

    console.log(newLawer);
    newLawer.save(function (err) {
        if (err) {
            res.json({"status": "error"})
        } else {
            res.json({"status": "success"});
        }
    });

};




