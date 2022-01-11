const getUrlString = (searchTerm) => {
  const rawURL = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=1&prop=pageimages|extracts&&exintro&explaintext&exlimit=max&format=json&origin=*`
  return encodeURI(rawURL)
}

function getData(url, protocol, callback) {
  require(protocol).get(url, (res) => {
    const {statusCode} = res;
    const contentType = res.headers['content-type'];

    let error;

    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
        `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // Consume response data to free up memory
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);

        callback(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });

}

function getWikiData(searhTerm, callback) {

  getData(getUrlString(searhTerm), "https", (data) => {
    if (data) {
      callback(data.query.pages[Object.keys(data.query.pages)[0]])
    } else {
      callback(null)
    }

  })
}

function getAstronautsData(callback) {
  getData('http://api.open-notify.org/astros.json', "http", (data) => {
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
