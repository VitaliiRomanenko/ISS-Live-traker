const express = require("express")
const sendMail = require("./emailManager.js")
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8080
const root = path.join(__dirname, 'build')

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.static(root));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.post("/feedback", (req, res) => {
    if (!req.body.email && !req.body.text) {
        res.sendStatus(400)
        return
    }
    sendMail(req.body.email, req.body.text, (status) => {
        res.sendStatus(status)
    })
})

app.get("*", (req, res) => {
    res.sendFile('index.html', {root});
})


app.listen(PORT, ()=>{
    console.log("Server started on PORT: " + PORT)
})