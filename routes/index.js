var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let the_host = req.headers['x-forwarded-host'] || req.headers.host
  res.render('index', {host: the_host});
});

module.exports = router;
