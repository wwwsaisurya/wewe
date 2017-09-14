const express = require('express'),
   bodyParser = require('body-parser'),
 cookieParser = require('cookie-parser'),
          app = express(),
         port = process.env.PORT || 8000;

//Initialise modules
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/dist', express.static('dist'));

//NOTE: Only necessary for static file debugging
app.use('/static', express.static('static'));

app.set('view engine', 'pug');

//Require routes
const mainRoute = require('./routes/index.js');
     errorRoute = require('./routes/error.js');

//Initialise routes
app.use(mainRoute);
app.use('/error', errorRoute);

app.listen(port, () => console.log(`Server successfully connected on 127.0.0.1:${port}`));
