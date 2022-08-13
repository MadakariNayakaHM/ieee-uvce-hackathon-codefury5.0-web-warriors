const startup=require('./../models/startupModel');
const express=require('express');
const jwt=require('jsonwebtoken');
const Email=require('./../email');

exports.createStartup= async (req,res,next)=>
{
    try{
        
        
        const decoded=jwt.verify(req.cookies.jwt,process.env.JWT_SECRET, function(err,decoded){return decoded.id})
        
         req.body.user= decoded;
        const newStartup= await startup.create(req.body);

        res.status(200).json({data:newStartup})

        const message =`conragtulations  new startup:${newStartup.startupName} is been added,
        its a better opertunity to take away this start by funding`
      try{
        await Email({
        email:process.env.TO_ALL_MAILS,
        subject:`new startup is been created and waiting for fundings`,
        message
      });
    }catch(err){console.log("erroe in sending mail")}
}
    catch(err){console.log("error at startup creation");
console.log(err)}
    }
