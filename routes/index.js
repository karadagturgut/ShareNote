var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
 const address =  res.body.maddress;
  res.render('index', {kullanici :" "});
  console.log(address);

});


module.exports = router;