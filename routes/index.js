var express = require('express');
var router = express.Router();
var auth = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/account', auth.ensureAuthenticated, function(req, res, next) {
  res.render('account', {
    title: 'Account',
    name: req.user.displayName,
    user: JSON.stringify(req.user)
  });
});

module.exports = router;
