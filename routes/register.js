var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.render('register');

});

module.exports = router;
