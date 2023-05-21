const express=require("express");

const router=express.Router();

const selfController=require('../controllers/selfs_controller');
router.get('/mego',selfController.mego);

module.exports=router;