const sendMail = require("../emailManager");

class emailController {
    async send(req, res) {
        if (!req.body.email && !req.body.text) {
            res.sendStatus(400)
            return
        }
        const status = await sendMail(req.body.email, req.body.text)
        return res.sendStatus(status)
    }
}

module.exports = new emailController()
