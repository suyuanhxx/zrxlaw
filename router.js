/**
 * Module dependencies.
 */

var express = require('express');
var config = require('./config');
var site = require('./controllers/index');
var users = require('./controllers/users');
var login = require('./controllers/login');

var router = express.Router();

// home page
router.get('/', site.index);


router.get('/users', users.team);
router.get('/login', login.login);


module.exports = router;