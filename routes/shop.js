const express = require('express');

const authController=require('../controller/shop');


const router = express.Router();


router.get('/',authController.getIndex);

module.exports=router;



