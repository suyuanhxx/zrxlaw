var Lawer = require('../controller/lawer');

module.exports = function (app) {
    // 获取所有律師
    app.get('/lawers', Lawer.getLawers);
    //添加一个律師
    app.post('/lawer', Lawer.addLawer);
};