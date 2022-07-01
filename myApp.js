require('dotenv').config();

let express = require('express');
let app = express();
console.log('Hello World');

//app.get('/', function(req, res) {
//    res.send('Hello Express');
//});

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    var response = "Hello json";
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({'message': response.toUpperCase()});
    }
        res.json({'message': response});
});

app.use('/public', express.static(__dirname + '/public'));


































 module.exports = app;
