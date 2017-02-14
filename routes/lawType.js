/**
 * Created by huangxiaoxu on 2017/2/14.
 */

var LawType = require('../controller/lawType');

module.exports = function (app) {
    // 获取所有业务信息
    app.get('/lawType', LawType.getAllLawType);
    // 添加业务信息
    app.post('/lawType', LawType.addLawType);
};