const router = require('express').Router(),
authRoutes = require('./auth')
postRoutes = require('./post')

router.use('/auth',authRoutes)
router.use('/post',postRoutes)

module.exports = router