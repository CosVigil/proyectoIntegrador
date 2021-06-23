var express = require('express');
var router = express.Router();

let chocolateController = require('../controllers/chocolateController');
let multer = require ('multer');
let path = require('path');


//configurar multer
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, path.join(__dirname, '../public/images/products'))
        },
    //usamos path join para evitar problemas de rutas
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname
        (file.originalname))
      }
    })
     
    var upload = multer({ storage: storage }) 

//buscador -> localhost:3000/chocolates/create

router.get ('/', chocolateController.index);
router.get ('/id/:id', chocolateController.show);
router.get ('/edit/:id', chocolateController.edit);
router.get ('/results', chocolateController.search);
router.get('/search', chocolateController.search);
router.get('/create', chocolateController.create);
router.post('/store', upload.single('image'), chocolateController.store);
router.post('/delete/:id', chocolateController.destroy);
//router.get('/new', chocolateController.new);
//router.get('/recomended', chocolateController.recomended);
router.get('editProduct/:productId', chocolateController.editProduct)




module.exports = router;