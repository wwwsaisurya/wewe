const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const location = req.cookies.location;
  const message = `attempt to retreive the current temperature of ${location.toUpperCase()} failed.`;
  const statusCodeError = new Error(message);

  res.locals = { statusCodeError }
  res.render('error.pug');
});

module.exports = router;
