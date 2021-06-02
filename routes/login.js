const express= require('express');
const router = express.Router();
const registerController = require('../controllers/loginController')


router.get('/', registerController.index);
router.post('/', registerController.login);
router.post('logout', registerController.logout)

module.exports = router;


