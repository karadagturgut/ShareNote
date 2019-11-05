var express = require('express');
var router = express.Router();
var db = require('mongoose');
const bcrypt = require('bcryptjs');



var User = require('../models/User');


router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', async(req, res) => {
 const {maddress,password}=req.body;
  
 console.log(maddress);
 console.log(password);
 try
  {
  const user = await User.findByCredentials(maddress,password)
  res.render('index');
  const mail =  req.body;
  const name = user.name + " " + user.surname;

 
} 
 catch (error) {

  console.log(error);
   res.status(400).send();
 }
 
        
 })

module.exports = router;
