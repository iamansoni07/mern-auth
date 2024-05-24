const express = require('express');
const router = express.Router();    //: Organizes and handles different routes/paths on the server.
const cors = require('cors');
const { test } =  require("../Controllers/authControllers.js");


//middleware
router.use(
    cors({
        credentials : true,
        origin : 'http://localhost:5173'
    })
)

router.get('/', test);

module.exports = router;
