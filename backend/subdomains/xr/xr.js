const express = require('express'),
    path = require('path'),
    router = express.Router();

// router.get('/', (req, res) => {
//     res.send("Hello, welcome to XR Land!");
// });

router.use(express.static(path.join(__dirname, '../../../frontend/xr/')));

module.exports = router;