const express= require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')


router.get('/id/:id', usersController.profile);


/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });*/

module.exports = router;
