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
    var username = req.body.username;
    var password = req.body.password;

    var newLawer = new Lawer(
        {
            name: 'zhangsan',
            chineseName: 'zhangshan',
            age: 25,
            sex: 'male',
            phone: '13007133406',
            email: '1498319046@qq.com',
            avatar: 'http://',
            description: 'asfadsfdsffete',
            joinTime: '',
            position: '律師',
            wechatId: '13007133406',
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




