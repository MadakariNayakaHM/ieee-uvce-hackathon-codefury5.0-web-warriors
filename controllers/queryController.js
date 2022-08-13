const express=require('express');
const query=require('./../models/chatbotModel');

exports.createQuery=async (req,res)=>{
    const newQuery= await query.create(req.body);
    res.status(200).json({data:newQuery});
}

exports.getOneQuery= async (req,res)=>
{
    const oneQuery=await query.findOne({query:req.body.query});
    if(!oneQuery)
    {
        res.status(401).json({meaasge:"sorry your query doesnt have any matches"})
    }
    else 
    res.status(200).json({data:oneQuery.solution});
    
}