var Lawer = require('../controller/lawer');

module.exports = function (app) {
    // 获取所有律師
    app.get('/lawers', Lawer.getLawers);
    app.get('/condition/lawers', Lawer.getTopLawers);
    // 根据关键字搜索律师
    app.get('/lawer/:keyword', Lawer.getLawer);
    //添加一个律師
    app.post('/lawer', Lawer.addLawer);
};