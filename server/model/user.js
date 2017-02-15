/**
 * Created by 1 on 2016/2/9.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,//自动生成
    nickname: String,
    password: String,
    avatar: String,
    gender: String,
    age: Number,
    phone: String,
    email: String,
    message: String,
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

mongoose.model('User', userSchema);