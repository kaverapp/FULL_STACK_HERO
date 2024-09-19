var express = require('express');
var controller = express.Router();

let database=require("./users");

let bcrypt=require("bcrypt");
let jwt=require("jsonwebtoken");


controller.post("/signup",async(req,res)=>{
    let {email,name,username,password,mobno}=req.body;
  
    bcrypt.hash(password,10);
    
    const passResponse=await database.create({
      email,name,username,password,mobno
    })
  })
  

  module.exports=controller;