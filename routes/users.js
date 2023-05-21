const express=require("express");
const router=express.Router();

const usersController=require('../controllers/users_controller');
router.get('/profile',usersController.profile);

//signin and signup pages render
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//create signup session page
router.post('/create',usersController.create);

module.exports=router;