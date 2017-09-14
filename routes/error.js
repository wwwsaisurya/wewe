'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var location = req.cookies.location;
  var message = 'attempt to retreive the current temperature of ' + location.toUpperCase() + ' failed.';
  var statusCodeError = new Error(message);

  res.locals = { statusCodeError: statusCodeError };
  res.render('error.pug');
});

module.exports = router;
//# sourceMappingURL=/Users/AnthonyMartinovic/Desktop/Software Development/My Software Projects/nodeWeatherApp/routes/error.js.map