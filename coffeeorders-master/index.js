/*const { backedUpFiles } = require('./fresh');
const db = require('diskdb');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get('/coffeeorders', (req, res) => {
    db.connect('./data', ['coffeeorders']);
    res.json(db.coffeeorders.find());
});

app.post('/coffeeorders', (req, res) => {
    db.connect('./data', ['coffeeorders']);
    try {
        db.coffeeorders.save(req.body);
        res.sendStatus(201);
    } catch (e) {
        console.log(`API error: ${e}`);
        res.sendStatus(500);
    }
});

app.delete('/coffeeorders', (req, res) => {
    db.connect('./data', ['coffeeorders']);
    backedUpFiles()
        .then(() => {
            res.sendStatus(200);
        });
});

// email routes.
app.get('/coffeeorders/:emailAddress', (req, res) => {
    const emailAddress = req.params.emailAddress;
    console.log(`looking for: ${emailAddress}`);
    db.connect('./data', ['coffeeorders']);
    let record = db.coffeeorders.find( { emailAddress: emailAddress } );
    if (record) res.status(200).json(record);
    else res.sendStatus(404);
});

app.put('/coffeeorders/:emailAddress', (req, res) => {
    const emailAddress = req.params.emailAddress;
    console.log(`looking for: ${emailAddress}`);
    db.connect('./data', ['coffeeorders']);
    let record = db.coffeeorders.findOne( { emailAddress: emailAddress } );
    console.log(`PUT: ${JSON.stringify(record,null,2)}`);
    if (record) {
        try {
            req.body._id = record._id;
            db.coffeeorders.remove({ _id: record._id });
            setTimeout(() => {
                db.coffeeorders.save(req.body);
                res.status(200).json(req.body);
            }, 200);
        } catch (e) {
            res.status(500).json({"error": `${e}`});
        }
    }
    else res.sendStatus(404);
});

app.delete('/coffeeorders/:emailAddress', (req, res) => {
    const emailAddress = req.params.emailAddress;
    console.log(`looking for: ${emailAddress}`);
    db.connect('./data', ['coffeeorders']);
    let record = db.coffeeorders.findOne( { emailAddress: emailAddress } );
    if (record) {
        db.coffeeorders.remove( { _id: record._id }, false );
        res.sendStatus(200);
    }
    else res.sendStatus(404);
});
 
app.listen(3000);
*/
var http = require('http');
​
var fs = require('fs');
var path = require('path');
var extract = require('./extract');
const extractFilePath = require('./extract');
var wss = require('./websockets-server');
​
var handleError =  function(err, res) { 
    console.log("handling error");
​
    res.writeHead(404);
    res.write("404 File not found");
    res.end();
};
​
var server = http.createServer(function (req, res) {
    console.log('Responding to a request.');
​
    var filepath = extractFilePath(req.url);
    fs.readFile(filepath, function (err, data) { 
        if (err) {  
            handleError(err, res);   
            return;
        } else { res.end(data); }
    });
});
​
server.listen(3000);
