/**
 * Created by huangxiaoxu on 2017/2/12.
 */

var Business = require('../controller/business');

module.exports = function (app) {
    // 获取所有业务信息
    app.get('/business', Business.getAllBusiness);
    // 添加业务信息
    app.post('/business', Business.addBusiness);
};
