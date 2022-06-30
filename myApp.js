let express = require('express');
let app = express();
console.log('Hello World');

//app.get('/', function(req, res) {
//    res.send('Hello Express');
//});

absolutePath = __dirname + relativePath/File.ext;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views.index.html');
});



































 module.exports = app;
