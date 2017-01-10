var site = require('../controller/index');

module.exports = function(app) {
    app.get('/', site.index);
};