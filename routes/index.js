'use strict';

var express = require('express');
var router = express.Router();

var request = require('request');
var apiOWM = require('./../data/api.json');

router.get('/', function (req, res) {
  var location = req.cookies.location;

  if (location) {
    var urlOWM = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiOWM.key;

    request(urlOWM, function (error, response, body) {

      if (response.statusCode === 200) {
        var _jsonResults = JSON.parse(body);
        var _tempKelvinFix = _jsonResults.main.temp - 273.15;
        var info = {
          "location": _jsonResults.name,
          "country": _jsonResults.sys.country,
          "tempC": '' + _tempKelvinFix.toFixed(1),
          "title": _jsonResults.weather[0].main.toUpperCase(),
          "description": _jsonResults.weather[0].description.charAt(0).toUpperCase() + _jsonResults.weather[0].description.slice(1),
          "icon": 'http://openweathermap.org/img/w/' + _jsonResults.weather[0].icon + '.png'
        };

        res.locals = { info: info };

        //If they do not match, the app will provide a 'closest match' instead.
        if (info.location.toUpperCase() !== location.toUpperCase()) {
          var _refactoredLocation = info.location;
          res.locals._refactoredLocation = _refactoredLocation;
        }

        res.render('index.pug');
      } else {
        res.redirect('/error');
      }
    }); //request function
  } else {
    res.redirect('/start');
  }
}); //app.get request

router.get('/start', function (req, res) {
  res.render('index.pug');
});

router.post('/', function (req, res) {
  res.cookie('location', req.body.location);
  setTimeout(function () {
    return res.redirect('/');
  }, 3000);
});

router.post('/clear', function (req, res) {
  res.clearCookie('location');
  setTimeout(function () {
    return res.redirect('/');
  }, 3000);
});

module.exports = router;
//# sourceMappingURL=/Users/AnthonyMartinovic/Desktop/Software Development/My Software Projects/expressWeatherApp/routes/index.js.map
