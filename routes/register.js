var express = require('express');
var router = express.Router();

//Models
var User = require('../models/User');

router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {


  const {name,surname,madress,number,password} = req.body;
  var newUser = new User({
    name,surname,madress,number,password
  });
  newUser.save(function(err,savedUser)
  {
    if(err)
    {
      console.log(err);
      return res.status(500).send();
      console.log(req.body);
     
    }
   
    return res.status(200).send();
    
  })
  res.render('succesful');
});

module.exports = router;
