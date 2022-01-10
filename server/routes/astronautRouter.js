const Router = require('express')
const astronautController = require('../controllers/astronautController')

const router = new Router()

router.get('/',  astronautController.getAstronauts)

module.exports = router