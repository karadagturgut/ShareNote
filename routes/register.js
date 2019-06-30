var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  const surname = req.body.surname;
  const madress = req.body.madress;
  var number = req.body.number;
  const password = req.body.password;

  var newUser = new User();
  newUser.name=name;
  newUser.surname=surname;
  newUser.madress=madress;
  newUser.number=number;
  newUser.password=password;
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
