const express=require('express');
const startUp=require('./../models/startupModel')

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
