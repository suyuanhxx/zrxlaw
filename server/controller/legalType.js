/**
 * Created by huangxiaoxu on 2017/2/14.
 */

// legalType
'use strict';

var mongoose = require('mongoose');
require('../model/legalType');
var LegalType = mongoose.model('LegalType');
var logger = require('../common/logger');

exports.getAllLegalType = function (req, res) {
    LegalType.find({}, function (err, docs) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": docs});
    })
};

exports.addLegalType = function (req, res) {
    var legalType = new LegalType();
    legalType.name = req.body.name;
    legalType.level = req.body.level;
    legalType.parentId = req.body.parentId;
    legalType.description = req.body.description;
    console.log(legalType);

    var promise = legalType.save();

    promise.onResolve(function (err) {
        if (err) {
            res.json({"status": "error"})
        } else {
            res.json({"status": "success"});
        }
    });
};
