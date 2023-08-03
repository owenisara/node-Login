const bcrypt = require('bcryptjs')
const User = require('../models/User') 
const jwt = require('jsonwebtoken');
exports.listUser = async(req,res)=>{
try{
    const user = await User.find({}).select('-password ').exec();
    res.send(user)
}
catch (err){
    console.log(err)
    res.status(500).send("Server Error")}
};

exports.readUser = async(req,res)=>{

    try{
        const id = req.params.id
        const user = await User.findOne({_id:id}).select('-password ')
        res.send(user)
    
    
    }
    catch (err){
        console.log(err)
        res.status(500).send("Server Error")}
};

exports.updateUser = async(req,res)=>{
    try{
        
    let  { id, password} = req.body.values

        const salt = await bcrypt.genSalt(10);

      var  endpassword = await bcrypt.hash(password,salt)
      const user = await User.findOneAndUpdate({_id:id},{password:endpassword}).exec()
      console.log(endpassword)
        res.send('Hello Update User')
    }
    catch (err){
        console.log(err)
        res.status(500).send("Server Error")}
};

exports.removeUser = async(req,res)=>{
    try{
        const id = req.params.id
        const user = await User.findOneAndDelete({_id:id}).exec()
        res.send(user)
    }
    catch (err){
        console.log(err)
        res.status(500).send("Server Error")}
};

exports.changeStatus= async(req,res)=>{
    
    try{
       const change = req.body.enabled
       const id = req.body.id
       console.log(change)
        const user = await User.findOneAndUpdate({_id:id},{enabled:change}).exec()
        res.send(user)
    }
    catch (err){
        console.log(err)
        res.status(500).send("Server Error")}
};

exports.changeRole= async(req,res)=>{
    
    try{
       const change = req.body.role
       const id = req.body.id
       console.log(change)
        const user = await User.findOneAndUpdate({_id:id},{role:change}).exec()
        res.send(user)
    }
    catch (err){
        console.log(err)
        res.status(500).send("Server Error")}
};