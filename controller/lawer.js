/**
 * Created by 1 on 2017/1/10.
 * @author huangxiaoxu
 */
'use strict';

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

// 根据输入关键字模糊查询
exports.getLawer = function (req, res) {
    var query = {};
    console.log(req.params.keyword);
    if (req.params.keyword) {
        query['lawerName'] = new RegExp(req.params.keyword);//模糊查询参数
    }
    console.log(query);
    Lawer.find(query, function (err, docs) {
        // return res.render('admin/movie', {movieList:list});
        return res.json({"status": "success", "data": docs});
    });
};

// / 根据用户名查询
exports.getLawerbyUsername = function (req, res) {
    var username = req.params.username;
    console.log(username);
    Lawer.findOne({'username': username}, function (err, docs) {
        return res.json({"status": "success", "data": docs});
    });
};

exports.addLawer = function (req, res) {
    var newLawer = new Lawer();
    console.log(tools.generatorUsername());
    newLawer.username = tools.generatorUsername();
    newLawer.jobNumber = req.body.jobNumber;
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




