/**
 * Created by huangxiaoxu on 2017/2/14.
 */

var LegalType = require('../controller/legalType');

module.exports = function (app) {
    // 获取所有业务信息
    app.get('/legalType', LegalType.getAllLegalType);
    // 添加业务信息
    app.post('/legalType', LegalType.addLegalType);
};