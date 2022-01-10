const Router = require('express')
const emailController = require('../controllers/emailController')

const router = new Router()

router.post('/',  emailController.send)

module.exports = router