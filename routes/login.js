var express = require('express');
var router = express.Router();
var db = require('mongoose');

var User = require('../models/User');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  console.log(req.body);

  const {username,password}=req.body;
  User.findOne({number:username,password:password}, function(err,user) {
    if(err)
    {
      console.log(err);
      return res.status(500).send();
    }
    if(!user)
    {
      return res.status(404).send();
    }

    return res.status(200).send();
    
  });
   return res.render('index');
});

module.exports = router;
