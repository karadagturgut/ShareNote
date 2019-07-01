const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR=10;
const userSchema = new mongoose.Schema({

    name: String,
    surname: String,
    madress:{type:String, unique:true},
    password: String,
    number : {type: String, unique:true}
    
});

const User = mongoose.model('User',userSchema);
module.exports=User;