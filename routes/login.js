const express= require('express');
const router = express.Router();
const registerController = require('../controllers/loginController')


router.get('/', registerController.login);

module.exports = router;


