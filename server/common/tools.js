const uuidV1 = require('uuid/v1');
const uuidV4 = require('uuid/v4');

exports.generatorUsername = function () {
    return uuidV1().replace(/-/g, "");
};