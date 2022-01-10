const express = require("express")
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require("./server/routes/index");

const app = express()
app.use(cors())
const PORT = process.env.PORT || 8080
const root = path.join(__dirname, 'build')

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.static(root));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/api', router)

app.get("/*", (req, res) => {
    res.sendFile('index.html', {root});
})


app.listen(PORT, ()=>{
    console.log("Server started on PORT: " + PORT)
})