'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

var port = process.env.PORT || 8000;

//Initialise modules
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/dist', express.static('dist'));

//NOTE: Only necessary for static file debugging
app.use('/static', express.static('static'));

app.set('view engine', 'pug');

//Require routes
var mainRoute = require('./routes/index.js');
var errorRoute = require('./routes/error.js');

//Initialise routes
app.use(mainRoute);
app.use('/error', errorRoute);

app.listen(port, function () {
  return console.log('Server successfully connected on 127.0.0.1:' + port);
});
//# sourceMappingURL=/Users/AnthonyMartinovic/Desktop/Software Development/My Software Projects/expressWeatherApp/app.js.map