const express=require("express");

const router=express.Router();

//access file from controllers
const homeController=require('../controllers/home_controller');
console.log('router loaded');

router.get('/',homeController.home);
router.use('/users',require('./users'));
// for any other router to access from here
//router.use('/routerName',require('./routerFile'));
router.use('/self',require('./self'));
module.exports=router;