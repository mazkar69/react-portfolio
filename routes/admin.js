const express = require('express')
const router = express.Router()
const adminLogin = require('../controller/admin/adminLogin')
const adminRegister = require('../controller/admin/adminRegister')



//Defining route here.
router.route('/admin/login').post(adminLogin);
router.route('/admin/register').post(adminRegister)





//Exporting router
module.exports = router;
