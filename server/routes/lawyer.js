var Lawer = require('../controller/lawyer');

module.exports = function (app) {
    /**
     * 瀑布流获取律师信息（名称，职位，描述，头像）
     */
    app.get('/lawyers/:page/:size', Lawer.getLawyersByWaterFlow);
    app.get('/lawyers/:page', Lawer.getLawyersByWaterFlow);
    app.get('/lawyersByPaging/:page/:size', Lawer.page);

    /**
     * 获取首页展示律师信息（名称，职位，描述，头像）
     */
    app.get('/condition/lawyers', Lawer.getTopLawyers);

    /**
     * 根据关键字搜索律师
     */
    app.get('/lawyer/:keyword', Lawer.getLawyer);

    /**
     * 添加律师
     */
    app.post('/lawyer', Lawer.addLawyer);

    /**
     * 修改律师信息
     */
    app.put('/lawyer/:id', Lawer.updateLawyerById);
};