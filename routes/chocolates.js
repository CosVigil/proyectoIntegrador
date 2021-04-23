var express = require('express');
var router = express.Router();

let chocolateController = require('../controllers/chocolateController');

//buscador -> localhost:3000/chocolates/detalle

router.get ('/', chocolateController.index);
router.get ('/create', chocolateController.create);
router.get ('/results', chocolateController.search);



module.exports = router;