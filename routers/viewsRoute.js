const viewsController=require('./../controllers/viewsController');
const express=require('express');
const Router = express.Router();
Router.route('/create').get(viewsController.createStartuppug);
Router.route('/login').get(viewsController.login);
Router.route('/signup').get(viewsController.signup);

module.exports=Router;
