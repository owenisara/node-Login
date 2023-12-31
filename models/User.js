const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    role:{type:String,default:'user'},
    enabled:{
        type:Boolean,default:true
    }
},{timestamps:true});
module.exports = User = mongoose.model('users',UserSchema);