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
    //if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({'message': 'HELLO JSON'});
    //} else {
    //    res.json({'message': 'Hello json'});
    //}
});

app.use('/public', express.static(__dirname + '/public'));


































 module.exports = app;
