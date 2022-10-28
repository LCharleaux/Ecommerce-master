const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.controller');

router.post('/', loginController.registerUser);
router.post('/', loginController.showHomePage);
router.get('/', loginController.showLoginPage);


module.exports = router;
