const express=require('express');
const startUp=require('./../models/startupModel');
const user=require('./../models/userModel');

exports.createStartuppug=async (req,res,next)=>
{
  const startup=
  res.status(200).render('createStartup') ;
}

exports.login=async (req,res,next)=>
{
  res.status(200).render('login') ;
}

exports.signup=async (req,res,next)=>
{
  res.status(200).render('signup') ;
}
exports.displayStartup=async (req,res,next)=>
{
  const startup= await startUp.find();
  // console.log(startup)
  res.status(200).render('displayStartup',{startup}) ;
}
exports.updateStartup=async (req,res,next)=>
{
  res.status(200).render('innerFile');
}
exports.viewDashboard=async (req,res,next)=>{

  const User= await user.countDocuments();
  const startUpInit=await user.countDocuments({roles:"startupInit"})
  const admin=await user.countDocuments({roles:"admin"})
  const enterpreneur=await user.countDocuments({roles:"enterpreneur"})
  const company=await user.countDocuments({roles:"company"})
  const startups= await startUp.countDocuments();
  const selected= await startUp.countDocuments({status:1});
  res.status(200).render('dashboard' ,{startUpInit,enterpreneur,company,startups,selected,User,admin})
}

exports.viewSelected=async (req,res,next)=>
{ const startup= await startUp.find();
  res.status(200).render('selected',{startup});
}
