const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../model/user");

//validate  input data
const Joi  = require("@hapi/joi");
const mongoose  = require("mongoose");

const registerSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
})

router.get('' , async(req,res)=>{
    res.json("hi auth")
    console.log(req.body);
})

router.post('/register', async(req,res)=>{
    res.send('register')
    const {email,password,username} = req.body;
    console.log(email);
    console.log(password);
    console.log(username);
    const emailExist= await User.findOne({"email":email})
    if(emailExist){
        console.log(emailExist);
    }
    // await User.create({'email':email,"username":username,"password":password})

})

module.exports=router; 