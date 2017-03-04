var Lawer = require('../controller/lawer');

module.exports = function (app) {
    /**
     * 瀑布流获取律师信息（名称，职位，描述，头像）
     */
    app.get('lawers/:page/:size', Lawer.getLawersByWaterFlow);

    /**
     * 获取首页展示律师信息（名称，职位，描述，头像）
     */
    app.get('/lawers/condition', Lawer.getTopLawers);

    /**
     * 根据关键字搜索律师
     */
    app.get('/lawer/:keyword', Lawer.getLawer);

    /**
     * 添加律师
     */
    app.post('/lawer', Lawer.addLawer);
};