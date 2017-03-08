var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('./common/logger');
var requestLogger = require('./middlewares/request_logger');
var db = require('./model/mongoose');
require('./middlewares/mongoose_log'); // 打印 mongodb 查询日志
var app = express();


// view engine setup
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(requestLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));
// app.use(express.static(path.resolve(__dirname, '../client/public')));
//rout map
require('./routes/index')(app);
require('./routes/user')(app);
require('./routes/lawyer')(app);
require('./routes/legalType')(app);
require('./routes/business')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
      res.render('error');
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
