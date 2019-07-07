const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR=10;
const userSchema = new mongoose.Schema({

    name: String,
    surname: String,
    maddress:{type:String, unique:true},
    password: String,
    number : {type: String, unique:true}
    
});

userSchema.statics.findByCredentials = async(email,password) => {

    const user = await User.findOne({maddress: email})
    if(!user)
    { 
        throw new Error('Kullanıcı bulunamadı!');
        
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch)
    {
        throw new Error('Şifre yanlış!')
    }

    return user;
}

const User = mongoose.model('User',userSchema);
module.exports=User;