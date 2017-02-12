/**
 * Created by 1 on 2017/2/9.
 */
// business

var mongoose = require('mongoose');
require('../model/business.js');
var Business = mongoose.model('Business');

//获取所有用户
exports.getAllBusiness = function (req, res) {
    Business.find({}, function (err, docs) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": docs});
    })
};

exports.addBusiness = function (req, res) {
    var business = new Business();
    business.name = req.body.name;
    business.type = req.body.type;
    business.description = req.body.description;

    Business.save({}, function (err, docs) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": docs});
    })
};



