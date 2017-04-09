/**
 * Created by 1 on 2017/1/10.
 * @author huangxiaoxu
 */
'use strict';

require('../model/lawyer');
var mongoose = require('mongoose');
var Lawyer = mongoose.model('Lawyer');
var tools = require('../common/tools');
var logger = require('../common/logger');
var result = require('../common/result');
var pageHelper = require('../common/pageHelper');
var fileHelper = require('../common/fileHelper');


/**
 * 瀑布流读取所有律师信息
 * page  页码
 * size  每页数据条数
 * @param req {page,size,count}
 * @param res {count 总数据条数,docs}
 */
exports.getLawyersByWaterFlow = function (req, res) {
    var page = req.params.page;
    var size = req.params.size;
    if (undefined == size || '' == size) {
        size = 10;
    }
    var fields = 'lawyerName position personalProfile avatar';
    pageHelper.pagingBySkip('Lawyer', fields, page, size, function (err, docs) {
        if (err) {
            result.code = 0;
            result.msg = err.errmsg;
            res.json(result);
            return;
        }
        else {
            result.data = docs;
            result.total = docs.length;
            return res.json(result);
        }
    });
};

exports.page = function (req, res) {
    var page = req.params.page;
    var size = req.params.size;
    var fields = 'lawyerName position personalProfile avatar';
    pageHelper.pagingAlgorithm('Lawyer', fields, page, size, function (err, docs) {
        if (err) {
            return;
        }
        result.data = docs;
        result.total = docs.length;
        return res.json(result);
    });
};

//获取所有用户
exports.getTopLawyers = function (req, res) {
    var condition = {order: 1};
    queryLawyers(condition, 0, 0, function (err, docs) {
        if (err) {
            return;
        }
        logger.info("getLTopLawyers result is:", docs);
        result.code = 1;
        result.data = docs;
        result.msg = "success";
        return res.json(result);
    });
};

/**
 * 根据输入关键字模糊查询
 * @param req
 * @param res
 */
exports.getLawyer = function (req, res) {
    var query = {};
    console.log(req.params.keyword);
    if (req.params.keyword) {
        query['LawyerName'] = new RegExp(/req.params.keyword/);//模糊查询参数
    }
    console.log(query);
    Lawyer.find(query, function (err, docs) {
        return res.json({"status": "success", "data": docs});
    });
};

/**
 * 根据用户名查询
 * @param req
 * @param res
 */
exports.getLawyerbyUsername = function (req, res) {
    var username = req.params.username;
    console.log(username);
    Lawyer.findOne({username: username}, function (err, docs) {
        return res.json({"status": "success", "data": docs});
    });
};

/**
 * 添加律师信息
 * @param req
 * @param res
 */
exports.addLawyer = function (req, res) {
    var newLawyer = new Lawyer();
    console.log(tools.generatorUsername());
    newLawyer.username = tools.generatorUsername();
    newLawyer.jobNumber = req.body.jobNumber;
    newLawyer.lawyerName = req.body.lawyerName;
    newLawyer.nickname = req.body.nickname;
    newLawyer.avatar = req.body.avatar;
    newLawyer.gender = req.body.gender;
    newLawyer.age = req.body.age;
    newLawyer.phone = req.body.phone;
    newLawyer.wechatId = req.body.wechatId;
    newLawyer.email = req.body.email;
    newLawyer.personalProfile = req.body.personalProfile;
    newLawyer.position = req.body.position;
    newLawyer.order = req.body.order;
    newLawyer.joinTime = Date.now();
    newLawyer.status = 1;

    console.log(newLawyer);
    newLawyer.save(function (err) {
        if (err) {
            return res.json({"status": "error"})
        } else {
            return res.json({"status": "success"});
        }
    });
};

/**
 * 根据id更新律师信息
 * @param req
 * @param res
 */
exports.updateLawyerById = function (req, res) {
    var id = req.params.id;
    var personalProfile = req.body.personalProfile;
    var avatar = req.body.avatar;
    Lawyer.findOne({_id: id}, function (err, doc) {
        if (err) {
            res.send("lawyer is not found");
        }
        if (undefined != personalProfile && '' != personalProfile) {
            doc.personalProfile = personalProfile;
        }
        if (undefined != avatar && '' != avatar) {
            doc.avatar = avatar;
        }
        doc.save(function (err, instance) {
            result.data = instance;
            return res.send(result);
        });
    });
};


/**
 * 上传头像
 */
exports.updloadAvatar = function (req, res) {
    var file = req.params.file;
    fileHelper.uploadAliOSS(file, function (data) {
        res.send(data);
    });
};

/**
 * 查询律师信息
 * @param condition
 * @param page
 * @param size
 * @param callback
 */
var queryLawyers = function (condition, page, size, callback) {
    var query = Lawyer.find(condition);
    if (Number(page) >= 1 && Number(size) >= 1) {
        query.skip((page - 1) * Number(size));
        query.limit(Number(size));
    }
    query.select('lawyerName position personalProfile avatar');
    query.exec(function (err, docs) {
        callback(err, docs);
    });
};


