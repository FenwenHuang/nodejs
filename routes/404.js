const express = require('express');

 ////////////////////////////////////////////////////////////

const authController=require('../controller/404');

 const router = express.Router();

 router.get('*', authController.getError);


 module.exports = router; 