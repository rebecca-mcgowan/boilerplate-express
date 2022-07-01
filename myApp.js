require('dotenv').config();

let express = require('express');
let app = express();
console.log('Hello World');

//if (process.env.MESSAGE_STYLE == 'uppercase') {
//    console.log('success');
//}
//app.get('/', function(req, res) {
//    res.send('Hello Express');
//});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    var response = "Hello json";
    //if (process.env.MESSAGE_STYLE === 'uppercase') {
        response = "Hello json".toUpperCase();
        //res.json({'message': 'HELLO JSON'});
    //} else {
        //response = "Hello json"
        //res.json({'message': 'Hello json'});
    //}
    res.json({'message': + response});
});

app.use('/public', express.static(__dirname + '/public'));


































 module.exports = app;
