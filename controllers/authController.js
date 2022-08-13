const express=require('express');
const mongoose=require('mongoose');
const User=require('./../models/userModel');
const jwt = require('jsonwebtoken');
const { promisify } = require("util");

const signToken=  (id)=>
{
    return jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN});
}

const createToken=(user,res)=>{
    const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + 90 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    Secure:true,

  };
  

  res.cookie('jwt', token, cookieOptions);

}

exports.signUp= async (req,res,next)=>
{
    const newUser= await User.create(req.body);
    createToken(newUser,res);
    res.status(200).json({data:newUser,
    })
}

exports.login = async (req, res, next) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      if (!email || !password) {
        res
          .status(401)
          .json({ status: "fail", message: "invalid email or password" });
      }
  
      const user = await User.findOne({ email: email }).select("+password");
  
      if (!user || !(await user.correctPassword(password, user.password))) {
        res
          .status(404)
          .json({ status: "fail", message: "invalid email or password" });
      }
      createToken(user,res);
      const token = signToken(user._id);
      res.status(200).json({ status: "success", token });
    
    } catch (err) {
      console.log(err);
    }
  };

  exports.protect = async (req, res, next) => {
    let token;
    try {
      
       if(req.cookies.jwt)
       {
        token=req.cookies.jwt;
      }
  
      if (!token) 
      {
        res.status(404).json({ status: "fail", message: "login 1st" });
      }
  
      const decoded = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET
      ).catch((err) => {
        res.status(401).json({ message: "expired token!!!" });
      });
      // const decoded=jwt.verify(token,process.env.JWT_SECRET,function(err,decoded){return decoded.id});
  
      next();
    } catch (err) {
      console.log(err);
    }
  };

  exports.ristrictTo = (...roles) => {
    try {
      return async (req, res, next) => {
        let token;
  
        if(req.cookies.jwt)
        {
          token=req.cookies.jwt;
        }
  
        if (!token) {
          res.status(404).json({ status: "fail", message: "login 1st" });
        }
  
        let decoded = jwt.verify(
          token,
          process.env.JWT_SECRET,
          function (err, decoded) {
            return decoded.id;
          }
        );
        let user = await User.findById(decoded);
        // console.log(user);
        console.log(user.roles);
        if (!roles.includes(user.roles)) {
          res.status(401).json({ message: "you are not authenticated" });
        }
        next();
      };
    } catch (err) {
      console.log(err);
    }
  };

  