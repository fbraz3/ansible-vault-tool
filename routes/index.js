var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let the_host = req.headers['x-forwarded-host'] || req.headers.host
  let config_gtag = process.env.CONFIG_GTAG
  let config_adsense = process.env.CONFIG_ADSENSE

  res.render('index', {
    host: the_host,
    config_gtag: config_gtag,
    config_adsense: config_adsense
  });
});

module.exports = router;