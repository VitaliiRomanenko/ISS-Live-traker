const express = require("express")
const path = require('path')

const PORT = process.env.PORT  || 8080


const app = express()

app.use(express.static(path.join(__dirname, 'static') ))
const root = require('path').join(__dirname,  'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

app.listen(PORT)