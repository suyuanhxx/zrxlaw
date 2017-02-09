/**
 * Created by xiaoxu.huang on 2017/2/9.
 */

var mongoose = require('mongoose');

var businessSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String,
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

mongoose.model('Business', businessSchema);