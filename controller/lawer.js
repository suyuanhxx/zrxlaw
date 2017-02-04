/**
 * Created by 1 on 2017/1/10.
 * @author huangxiaoxu
 */
// lawer
var mongoose = require('mongoose');
require('../model/lawer.js');
var Lawer = mongoose.model('Lawer');

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
    var name = req.body.name;
    var chineseName = req.body.chineseName;
    var age = req.body.age;
    var sex = req.body.sex;
    var phone = req.body.phone;
    var email = req.body.email;
    var avatar = req.body.avatar;
    var description = req.body.description;
    var joinTime = req.body.joinTime;
    var position = req.body.position;
    var wechatId = req.body.wechatId;

    console.log(req.body);
    var newLawer = new Lawer(
        {
            name: name,
            chineseName: chineseName,
            age: age,
            sex: sex,
            phone: phone,
            email: email,
            avatar: avatar,
            description: description,
            joinTime: joinTime,
            position: position,
            wechatId: wechatId,
            status: 1
        }
    );
    console.log(newLawer);
    newLawer.save(function (err) {
        if (err) {
            res.json({"status": "error"})
        } else {
            res.json({"status": "success"});
        }
    });

};




