/**
 * Created by huangxiaoxu on 2017/3/5.
 */
var mongoose = require('mongoose');

/**
 * 分页工具类，不使用skip，根据objectId获取最后一个
 * @param model
 * @param fields
 * @param pageIndex
 * @param pageSize
 * @param callback
 */
exports.pagingAlgorithm = function (model, fields, pageIndex, pageSize, callback) {
    var modelSchema = mongoose.model(model);
    getLatest(modelSchema, (pageIndex - 1) * pageSize, function (err, doc) {
        getNextPageWithLastId(modelSchema, fields, doc._id, pageSize, function (err, docs) {
            callback(err, docs);
        })
    })
};

/**
 *
 * @param model
 * @param fields
 * @param pageIndex
 * @param pageSize
 * @param callback
 */
exports.pagingBySkip = function (model, fields, pageIndex, pageSize, callback) {
    var modelSchema = mongoose.model(model);
    var query = modelSchema.find();
    if (Number(pageIndex) >= 1 && Number(pageSize) >= 1) {
        query.skip((pageIndex - 1) * Number(pageSize));
        query.limit(Number(pageSize));
    }
    if (undefined != fields || '' != fields) {
        query.select(fields);
    }
    query.exec(function (err, docs) {
        callback(err, docs);
    });
};


var getLatest = function (model, count, callback) {
    var query = model.find();
    query.limit(Number(count));
    query.exec(function (err, docs) {
        var doc = docs[count - 1];
        callback(err, doc);
    })
};

var getNextPageWithLastId = function (model, fields, lastId, size, callback) {
    var query = model.find({'_id': {"$gt": lastId}});
    query.limit(Number(size));
    if (undefined != fields || '' != fields) {
        query.select(fields);
    }
    query.exec(function (err, docs) {
        callback(err, docs);
    })
};