const express=require('express');
const authController=require('./../controllers/authController');
const Router = express.Router();

Router.route('/signUp').post(authController.signUp);
Router.route('/login').post(authController.login);

module.exports=Router;