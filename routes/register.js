const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mailer = require('nodemailer');

//Model(ler)
var User = require('../models/User');

//
var maddress;

router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {

const {name,surname,number,password} = req.body;
maddress = req.body.maddress;
console.log(req.body);

bcrypt.hash(password,10).then((hash)=>{
  const newUser = new User({
    
    name,surname,maddress,number,password:hash
  });
const promise = newUser.save();
promise.then((data) =>{
  res.render('succesful');
  sendmail();

}).catch((err)=>
{
  res.json(err);
     })
  });
});


function sendmail() {
  const transporter = mailer.createTransport({
    service: 'outlook',
    auth :{
      user: 'turgut_kara_dag@hotmail.com',
      pass: '26081907'
    }
  });
  const mail = {
    from:'turgut_kara_dag@hotmail.com',
    to: maddress,
    subject: "Kayıt Olduğunuz için teşekkürler!",
    text: " kaydınız başarılı." // html olarak değiştirip, html formatlı mail gönderilebilir.
  };
transporter.sendMail(mail, function(err,info) {

  if(err)
  console.log(err)
  else
  console.log('Mail gönderildi:'+ info);

})

} 

module.exports = router;
