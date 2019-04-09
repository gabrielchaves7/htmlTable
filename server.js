var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('resources'));
global.__basedir = __dirname;

require('./app/routes/rotas.js')(app);

// Create a Server
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})
