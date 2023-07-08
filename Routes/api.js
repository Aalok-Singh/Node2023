const express = require('express');
const router  = express.Router(); 
const UserController = require('../Controller/UserController'); 

router.post('/insertUser', UserController.newUser); 
router.post('/deleteUser',UserController.deleteUser)
router.post('/updateUser',UserController.updateUser)
router.get('/getAllUser',UserController.allUser);

module.exports = router;
