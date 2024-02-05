/*For crud function but without method such as get ,post ,delete and update of the given collection. this will handled by route.js */

const User =require("./model")
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken=(user)=>{   
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const register=async(req)=>{
    try{
        let user=await User.findOne({email:req.body.email})
       if(user){
           return {message:"Email already exists"}
       }   
      user=await User.create(req.body);
      const token = generateToken(user)  
      return {user,token};
    }
    catch(err){
        res.send({message:err.message})
    }
}



const login=async(req)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return "wrong email or password"
        }
        const match=user.checkPassword(req.body.password)
       if(!match){
        return "wrong email or password"
       }
       const token = generateToken(user)  
      return {user,token};
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
}

module.exports={register,login}