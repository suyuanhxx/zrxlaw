var site = require('../controller/index');

module.exports = function(app) {
    app.get('/', site.index);

    // 静态资源路由
    app.get('/*.html', site.static);
};