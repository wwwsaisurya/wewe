const express = require('express');
const router = express.Router();

const request = require('request');
const apiOWM = require('./../data/api.json');

router.get('/', (req, res) => {
    const location = req.cookies.location;

    if (location) {
      let urlOWM = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiOWM.key}`;

      request(urlOWM, (error, response, body) => {

        if (response.statusCode === 200) {
          const _jsonResults = JSON.parse(body);
          const _tempKelvinFix = (_jsonResults.main.temp - 273.15);
          const info = {
            "location": _jsonResults.name,
            "country": _jsonResults.sys.country,
            "tempC": `${_tempKelvinFix.toFixed(1)}`,
            "title": (_jsonResults.weather[0].main).toUpperCase(),
            "description": (_jsonResults.weather[0].description).charAt(0).toUpperCase() + (_jsonResults.weather[0].description).slice(1),
            "icon": `http://openweathermap.org/img/w/${_jsonResults.weather[0].icon}.png`
          };

          res.locals = { info };

          //If they do not match, the app will provide a 'closest match' instead.
          if (info.location.toUpperCase() !== location.toUpperCase()) {
            const _refactoredLocation = info.location;
            res.locals._refactoredLocation = _refactoredLocation;
          }

          res.render('index.pug');

        } else { res.redirect('/error'); }
      }); //request function
    } else { res.redirect('/start'); }
}); //app.get request

router.get('/start', (req, res) => res.render('index.pug'));

router.post('/', (req, res) => {
  res.cookie('location', req.body.location);
  setTimeout(() => res.redirect('/'), 3000);
});

router.post('/clear', (req, res) => {
  res.clearCookie('location');
  setTimeout(() => res.redirect('/'), 3000);
});

module.exports = router;
