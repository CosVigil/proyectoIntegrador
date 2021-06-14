const express= require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')


router.get('/', usersController.profile);
router.get('/edit', usersController.profileEdit);

/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });*/

module.exports = router;
