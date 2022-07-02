require('dotenv').config();
const bodyParser = require('body-parser');
let express = require('express');
let app = express();
console.log('Hello World');
//const port = 3000;

//app.get('/', function(req, res) {
//    res.send('Hello Express');
//});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({'time': req.time});
})

app.get('/:word/echo', function(req, res) {
    res.json({'echo': req.params.word})
})

app.get('/name', (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json({'name': firstName + ' ' + lastName});
});

app.post('/name', function(req, res) {
    var firstName = req.body.first;
    var lastName = req.body.last;
    res.json({'name': firstName + ' ' + lastName});
});

app.use('/public', express.static(__dirname + '/public'));

//app.listen(port, () => {
//    console.log(`Example app listening on port ${port}`)
//  })































 module.exports = app;
