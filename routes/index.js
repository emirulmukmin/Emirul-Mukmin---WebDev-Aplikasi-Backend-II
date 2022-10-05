const express = require('express')
const router = express.Router()

router.use('/url', require('./url.routes')) 

module.exports = router;