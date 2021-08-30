const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.NODE_PORT;

app.get("/", (req, res) => {
    res.send('logger');
});

app.get("/test", (req, res) => {
    console.log('test');
    let content = "test"
    res.send(content)
})

const jsonParser = express.json();

// let arr = [];
app.post("/test", jsonParser, (req, res) => {
    console.log(req.body);
    // console.log(JSON.stringify(req.body));
    let payload = req.body;
    // arr.push(payload);
    // console.log(arr);
    res.send('test')
})

app.listen(port);