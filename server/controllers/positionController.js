const axios = require("axios");

class positionController {
  async getPosition(req, res) {
    let {data} = await axios.create().get('http://api.open-notify.org/iss-now.json')
    res.json( data)
  }

}

module.exports = new positionController()
