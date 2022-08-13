const express=require('express');
const authcontroller=require('./../controllers/authController');
const startupController=require('./../controllers/startupController');
const Router=express.Router();

Router.route('/createStartup').post(authcontroller.protect,startupController.createStartup);

module.exports=Router;