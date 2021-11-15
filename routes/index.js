const checkAuth = require('../middlewares/checkAuth')
const router = require('express').Router(),
authRoutes = require('./auth')
postRoutes = require('./post')

router.use('/auth',authRoutes)
router.use('/post',checkAuth,postRoutes)

module.exports = router