const axios = require("axios");

const getUrlString = (searchTerm) => {
  const rawURL = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrlimit=1&prop=pageimages|extracts&&exintro&explaintext&exlimit=max&format=json&origin=*&gsrsearch="
  return encodeURI(rawURL + searchTerm)
}

function getData(url, callback){
  axios.create().get(url).then(data =>{
    callback(data.data)
  })
}

function getWikiData(searhTerm, callback) {

  getData(getUrlString(searhTerm),  (data) => {
    if (data) {
      callback(data.query.pages[Object.keys(data.query.pages)[0]])
    } else {
      callback(null)
    }

  })
}

function getAstronautsData(callback) {
  getData('http://api.open-notify.org/astros.json',  (data) => {
    callback(data.people.map((person =>
          new Promise((resolve, reject) => {
            getWikiData(person.name, (data) => {
              if (data) {
                let bigImg = data.thumbnail.source.replace(/\.jpg\/.*px/, ".jpg/400px").replace(/\.JPG\/.*px/, ".JPG/400px")
                resolve({name: person.name, info: data.extract, img: bigImg})
              } else {
                reject(new Error("Wiki data can not be Null"))
              }
            })
          }).catch(console.error)
      ))
    )
  })


}

function getPeopleInSpace(callback) {
  getAstronautsData(promises => {
    Promise.all(promises).then(data => callback(data)).catch(console.error)
  })
}

module.exports = getPeopleInSpace
