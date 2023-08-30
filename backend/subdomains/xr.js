const express = require('express'),
  path = require('path'),
  router = express.Router();

var options = {
  index: 'xr.html',
};

router.use(express.static(path.join(__dirname, '../../frontend/'), options));

module.exports = router;
