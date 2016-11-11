var express = require('express');
var router = express.Router();


/* GET users listing. */
/**
 * var data = {
                title:"title",
                message:"message"
            };
 */
router.post('/', function(req, res, next) {
  var obj = req.body;
	console.log('body: ' + JSON.stringify(req.body));
	res.send(obj.title);
});

/**
 * redirect 链接跳转
 */
router.get('/', function(req, res, next) {
  res.redirect('../login.html');
});

module.exports = router;

