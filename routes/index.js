var express = require('express');
var router = express.Router();
var Login = require('./login');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  const name = Login.name;
  console.log(name);

});


module.exports = router;