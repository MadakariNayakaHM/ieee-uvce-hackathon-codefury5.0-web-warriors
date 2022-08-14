const express=require('express');
const authcontroller=require('./../controllers/authController');
const startupController=require('./../controllers/startupController');
const Router=express.Router();

Router.route('/createStartup').post(authcontroller.protect,authcontroller.ristrictTo('startupInit') ,startupController.createStartup);
Router.route('/viewStartups').get(authcontroller.protect,authcontroller.ristrictTo('admin','enterprenuer','company') ,startupController.getStartup);
Router.route('/selectStartup').patch(authcontroller.protect,authcontroller.ristrictTo('admin','enterprenuer','company'),startupController.selectStratup);
module.exports=Router;