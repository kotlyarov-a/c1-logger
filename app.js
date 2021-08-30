const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.NODE_PORT;

app.get("/", (req, res) => {
    res.send('logger');
});

app.get("/test", (req, res) => {
    let dateTime = new Date().toISOString();
    console.log(`${dateTime}    test`);
    let content = "test"
    res.send(content)
})


const jsonParser = express.json();

// let arr = [];
app.post("/test", jsonParser, (req, res) => {
    let dateTime = new Date().toISOString();
    console.log(`${dateTime}    ${req.body}`);
    // console.log(JSON.stringify(req.body));
    let payload = req.body;
    // arr.push(payload);
    // console.log(arr);
    res.send('test')
})

app.listen(port);