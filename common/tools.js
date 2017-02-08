const uuidV1 = require('uuid/v1');

exports.generatorUsername = function () {
    return uuidV1().replace(/-/g, "");
};