/**
 * Created by xiaoxu.huang on 2016/12/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utility = require('utility');

var LawerSchema = new Schema({
    name: String,
    chineseName: String,
    age: Number,
    sex: String,
    phone: String,
    email: String,
    avatar: String,
    description: String,
    joinTime: Date,
    status: Number,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

LawerSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
});

LawerSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort({'name': 'asc'})
            .exec(cb);
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id}).exec(cb);
    },
    createInfo: function (user, cb) {
        return this
            .create(user, cb);
    },
    updateInfo: function (id, user, cb) {
        var conditions = {_id: id};
        var options = {};
        var update = {$set: user};
        return this
            .update(conditions, update, options, cb);
    },
    deleteInfo: function (id, cb) {
        var conditions = {_id: id};
        return this
            .remove(conditions, cb);
    }
};
var Lawer = mongoose.model('Lawer', LawerSchema);

module.exports = Lawer;
