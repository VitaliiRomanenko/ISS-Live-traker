const getPeopleInSpace = require("../wikiManager");

class astronautController {
    async getAstronauts(req, res) {
        getPeopleInSpace(data => {
            res.json(data)
        })
    }

}

module.exports = new astronautController()
