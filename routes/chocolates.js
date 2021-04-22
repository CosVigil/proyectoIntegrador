var express = require('express');
var router = express.Router();

let chocolateController = require('../controllers/chocolateController');

//buscador -> localhost:3000/chocolates/detalle

router.get ('/', chocolateController.index);
router.get ('/detalle', chocolateController.show);
router.get ('/create', chocolateController.create);


module.exports = router;