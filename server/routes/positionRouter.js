const Router = require('express')
const positionController = require('../controllers/positionController')

const router = new Router()

router.get('/', positionController.getPosition)

module.exports = router