const Router = require('express')
const emailRouter = require('../routes/emailRouter')
const astronautRouter = require('../routes/astronautRouter')
const positionRouter = require('../routes/positionRouter')
const router = new Router()

router.use('/feedback', emailRouter)
router.use('/getpeopleinspace', astronautRouter)
router.use('/getposition', positionRouter)
module.exports = router