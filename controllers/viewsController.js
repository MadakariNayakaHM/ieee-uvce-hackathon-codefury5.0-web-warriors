const express=require('express');

exports.createStartuppug=async (req,res,next)=>
{
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
