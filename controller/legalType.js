/**
 * Created by huangxiaoxu on 2017/2/14.
 */

// lawType
'use strict';

var mongoose = require('mongoose');
require('../model/legalType.js');
var LegalType = mongoose.model('LegalType');

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

    lawType.save({}, function (err, docs) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": docs});
    })
};
