var express = require('express');
var router = express.Router();

let chocolateController = require('../controllers/chocolateController');

//buscador -> localhost:3000/chocolates/create

router.get ('/', chocolateController.index);
router.get ('/id/:id', chocolateController.show);
router.get ('/results', chocolateController.search);
router.get('/search', chocolateController.search);
router.get('/create', chocolateController.create);
router.post('/store', chocolateController.store);
router.post('/delete/:id', chocolateController.destroy);
router.get('/new', chocolateController.new);



module.exports = router;