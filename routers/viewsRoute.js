const viewsController=require('./../controllers/viewsController');
const express=require('express');
const Router = express.Router();
Router.route('/create').get(viewsController.createStartuppug);
Router.route('/login').get(viewsController.login);
Router.route('/signup').get(viewsController.signup);
Router.route('/display').get(viewsController.displayStartup);
Router.route('/updateStartup').get(viewsController.updateStartup);
Router.route('/viewDash').get(viewsController.viewDashboard);
Router.route('/viewSelected').get(viewsController.viewSelected);
Router.route('/createQuery').get(viewsController.createQuery);
Router.route('/').get(viewsController.basePug);
Router.route('/chat').get(viewsController.chat);

module.exports=Router;
