/**
 * Created by 1 on 2017/1/10.
 */
// user
'use strict';

var mongoose = require('mongoose');
require('../model/user.js');
var User = mongoose.model('User');
var tools = require('../common/tools');
var logger = require('../common/logger');


//获取所有用户
exports.getUsers = function (req, res) {
    User.find({}, function (err, docs) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": docs});
    })
};

//获取某一个用户
exports.getUser = function (req, res) {

    var id = req.params.id;

    User.findOne({_id: id}, function (err, doc) {
        if (err) {
            res.json({"status": "error"});
        } else {
            res.json({"status": "success", "data": doc})
        }
    });
};

//删除某一个用户
exports.delUser = function (req, res) {

    var id = req.params.id;

    User.remove({_id: id}, function (err, doc) {
        if (err) {
            res.json({"status": "error"});
        } else {
            res.json({"status": "success"})
        }
    });
};

exports.addUser = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var newUser = new User();
    newUser.username = username;
    newUser.password = password;
    logger.info(newUser);
    newUser.save(function (err) {
        if (err) {
            res.json({"status": "error"})
        } else {
            res.json({"status": "success"});
        }
    });

};

exports.updateUser = function (req, res) {
    var id = req.params.id;

    var username = req.body.username;
    console.log(username);
    var password = req.body.password;
    console.log(password);

    var conditions = {_id: id};
    var update = {$set: {username: username, password: password}};
    var options = {upsert: true};
    User.update(conditions, update, options, function (error) {
        if (error) {
            res.json({"status": "error"});
        } else {
            res.json({"status": "success"});
        }
    });
};

exports.post = function (req, res) {

    var user = new User(
        {
            username: "amdin",
            password: "123456"
        }
    );
    user.save(function (err) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": user});
    });
};


exports.contactUs = function (req, res) {
    var user = new User();
    user.username = tools.generatorUsername();
    user.password = null;
    user.nickname = req.body.nickname;
    user.phone = req.body.phone;
    user.message = req.body.message;
    user.save(function (err) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.render("index.html", {"status": "success", "data": user});
    });
};



