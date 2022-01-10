const Router = require('express')
const emailRouter = require('../routes/emailRouter')
const astronautRouter = require('../routes/astronautRouter')
const router = new Router()

router.use('/feedback', emailRouter)
router.use('/getpeopleinspace', astronautRouter)
module.exports = router