const express = require("express"),
  path = require("path"),
  router = express.Router();

router.use(express.static(path.join(__dirname, "../../../frontend/xr/")));

module.exports = router;
