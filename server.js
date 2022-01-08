const express = require("express")
const sendMail = require("./emailManager.js")
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080


const app = express()

app.use(express.static(path.join(__dirname, 'static')))
const root = require('path').join(__dirname, 'build')
app.use(express.static(root));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.post("/feedback", (req, res) => {
    if (!req.body) {
        res.sendStatus(400)
        return
    }
    sendMail(req.body.email, req.body.text, res)

})



app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
console.log("Server started on PORT: " + PORT);
app.listen(PORT)