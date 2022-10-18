const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.controller');


router.get('/', loginController.showLoginPage);
router.post('/', loginController.showHomePage);

module.exports = router;
