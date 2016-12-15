/**
 * Created by xiaoxu.huang on 2016/12/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utility = require('utility');

var lawerSchema = new Schema({
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


lawerSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
});

lawerSchema.statics = {
    fetch: function (cb) {
        return this.find({}).sort({'name': 'asc'}).exec(cb);
    },
    findById: function (id, cb) {
        return this.findOne({_id: id}).exec(cb);
    },
    save: function (lawer, cb) {
        return this.create(lawer, cb);
    },
    updateInfo: function (id, lawer, cb) {
        var conditions = {_id: id};
        var options = {};
        var update = {$set: lawer};
        return this.update(conditions, update, options, cb);
    },
    deleteInfo: function (id, cb) {
        var conditions = {_id: id};
        return this.remove(conditions, cb);
    }
};

/**
 * 编译模型时指定集合名称： mongoose.model(name, [schema], [colleciton], [skipInit])
 * 参数: name ：标识model的字符串
 *       schema: 即前面定义的Schema对象
 *       collection：要连接的集合名称（如果在Schema对象中没有指定一个集合
 *       skipInit： 默认为false，如果为true，则跳过初始化过程，创建一个没有连接到数据库的一个简单的Model对象。
 */

var Lawer = mongoose.model('Lawer', lawerSchema, 'lawers');

module.exports = Lawer;
