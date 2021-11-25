const moment = require('moment');
const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3210, () => { console.log('listening on 3210... running Mock Server')});

app.get('/status', (req, res) => {
    console.log('mockserver - status - %s', moment().format('YYYY-MM-DD HH24:MI:SS'));
    res.send({status: "ok"});
});

app.get('/api/v1/example/get', (req, res) => {
    console.log('mockserver - get - %s', moment().format('YYYY-MM-DD HH24:MI:SS'));
    console.log(req.headers);
    // lendo arquivo json
    var mockData = {};
    mockData = JSON.parse(fs.readFileSync('mock.json'))
    res.send(mockData);
});

app.post('/api/v1/example/oauth/token', (req, res) => {
    console.log('mockserver - token - %s', moment().format('YYYY-MM-DD HH24:MI:SS'));
    console.log(req.headers);
    console.log(req.body);
    var mocktoken = {
        access_token: 'asdbjasdjasd546asd54asd654asd54aasd354',
        token_type: 'bearer',
        expires_in: 3600
    }
    res.send(mocktoken);
});