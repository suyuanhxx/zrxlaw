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



