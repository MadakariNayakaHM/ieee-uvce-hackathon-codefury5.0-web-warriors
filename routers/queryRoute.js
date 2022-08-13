const express=require('express');
const queryController=require('./../controllers/queryController');
const authController=require('./../controllers/authController');
const Router=express.Router();

Router.route('/query').post(authController.protect,authController.ristrictTo('admin'),queryController.createQuery);

Router.route('/getquery').get(authController.protect,queryController.getOneQuery);

module.exports=Router;
