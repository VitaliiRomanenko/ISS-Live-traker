const getPeopleInSpace = require("../wikiManager");

class astronautController {
  async getAstronauts(req, res) {
    let data = await getPeopleInSpace()
    res.json(data)
  }

}

module.exports = new astronautController()
