const axios = require("axios");

const WIKI_URL = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrlimit=1&prop=pageimages|extracts&&exintro&explaintext&exlimit=max&format=json&origin=*&gsrsearch="
const ASTRONAUTS_URL = "http://api.open-notify.org/astros.json"

async function fetchData(url) {
  let {data} = await axios.create().get(url)
  return data
}

async function fetchAstronautsInfo(astronaut) {
  let data = await fetchData(encodeURI(WIKI_URL + astronaut))
  let astronautInfo =  data.query.pages[Object.keys(data.query.pages)[0]]
  let bigImg = astronautInfo.thumbnail.source
    .replace(/\.jpg\/.*px/, ".jpg/400px")
    .replace(/\.JPG\/.*px/, ".JPG/400px")

  return({name: astronaut.name, info: astronautInfo.extract, img: bigImg})
}

async function getPeopleInSpace() {
  return await fetchData(ASTRONAUTS_URL).then(astronautsList => {
    return astronautsList.people.map(astronaut => {
      return fetchAstronautsInfo(astronaut.name)
    })
  }).then(list => {
    return Promise.all(list).catch(console.error)
  })
}

module.exports = getPeopleInSpace
