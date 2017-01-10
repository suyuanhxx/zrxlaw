/**
 * Created by xiaoxu.huang on 2017/1/10.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

/**
 * 编译模型时指定集合名称： mongoose.model(name, [schema], [colleciton], [skipInit])
 * 参数: name ：标识model的字符串
 *       schema: 即前面定义的Schema对象
 *       collection：要连接的集合名称（如果在Schema对象中没有指定一个集合
 *       skipInit： 默认为false，如果为true，则跳过初始化过程，创建一个没有连接到数据库的一个简单的Model对象。
 */

mongoose.model('Lawer', lawerSchema, 'lawers');
