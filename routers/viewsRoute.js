const viewsController=require('./../controllers/viewsController');
const authController=require('./../controllers/authController');
const express=require('express');
const Router = express.Router();
Router.route('/create').get(authController.protect,authController.ristrictTo('startupInit'),viewsController.createStartuppug);
Router.route('/login').get(viewsController.login);
Router.route('/signup').get(viewsController.signup);
Router.route('/display').get(authController.protect,authController.ristrictTo("admin", "enterpreneur", "company"),viewsController.displayStartup);
Router.route('/updateStartup').get(authController.protect,authController.ristrictTo("admin", "enterpreneur", "company"),viewsController.updateStartup);
Router.route('/viewDash').get(viewsController.viewDashboard);
Router.route('/viewSelected').get(authController.protect,authController.ristrictTo("admin", "enterpreneur", "company"),viewsController.viewSelected);
Router.route('/createQuery').get(authController.protect,authController.ristrictTo("admin"),viewsController.createQuery);
Router.route('/').get(viewsController.basePug);
Router.route('/chat').get(viewsController.chat);

module.exports=Router;
