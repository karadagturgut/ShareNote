const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//Models
var User = require('../models/User');

router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {
const {name,surname,maddress,number,password} = req.body;
console.log(req.body);
bcrypt.hash(password,10).then((hash)=>{
  const newUser = new User({
    
    name,surname,maddress,number,password:hash
  });
const promise = newUser.save();
promise.then((data) =>{
  res.render('succesful');
}).catch((err)=>
{
  res.json(err);
})
});
});


 

module.exports = router;
