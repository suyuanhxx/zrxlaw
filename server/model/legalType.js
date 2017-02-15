/**
 * Created by xiaoxu.huang on 2017/2/8.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var legalTypeSchema = new Schema({
    name: String,
    level: Number,//level=0表示最大
    parentId: String,//所属父类id
    description: String,
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


mongoose.model('LegalType', legalTypeSchema, 'legalType');