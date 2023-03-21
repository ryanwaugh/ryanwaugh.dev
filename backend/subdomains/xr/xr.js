const express = require('express'),
      router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello, welcome to XR Land!");
});

module.exports = router;