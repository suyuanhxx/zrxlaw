/**
 * Created by huangxiaoxu on 2017/2/14.
 */

// lawType
'use strict';

var mongoose = require('mongoose');
require('../model/lawType.js');
var LawType = mongoose.model('LawType');

exports.getAllLawType = function (req, res) {
    LawType.find({}, function (err, docs) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": docs});
    })
};

exports.addLawType = function (req, res) {
    var lawType = new LawType();
    lawType.name = req.body.name;
    lawType.level = req.body.level;
    lawType.parentId = req.body.parentId;
    lawType.description = req.body.description;

    lawType.save({}, function (err, docs) {
        if (err) {
            res.json({"status": "error", "msg": "error"});
        }
        res.json({"status": "success", "data": docs});
    })
};
