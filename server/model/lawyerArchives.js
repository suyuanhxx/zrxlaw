/**
 * Created by huangxiaoxu on 2017/3/4.
 */

/**
 * 律师档案
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var lawyerArchives = new Schema({
    id: {type: ObjectId},
    /**
     * 证件照
     */
    lawyerPhoto: {type: String},
    /**
     * 律所
     */
    lawOffice: {type: String},
    /**
     * 家庭住址（可选）
     */
    homeAddress: {type: String},
    /**
     * 律师类型[101:高级律师;102:合伙律师;103:专职律师;104:律师助理;105:实习律师]
     */
    lawyerType: {type: Number},
    /**
     * 案件总数
     */
    caseCount: {type: Number},
    /**
     * 案件纵览
     */
    caseDetail: {type: String},
    status: {type: Number},
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

mongoose.model('LawyerArchives', lawerSchema, 'lawyerArchives');