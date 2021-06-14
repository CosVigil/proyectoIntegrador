const express= require('express');
const router = express.Router();
const registerController = require('../controllers/registerController')
let multer = require ('multer');
let path = require('path');


//configurar multer
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, path.join(__dirname, '../public/images/avatars'))
        },
    //usamos path join para evitar problemas de rutas
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname
        (file.originalname))
      }
    })
     
    var upload = multer({ storage: storage }) 
  

//*Get home page*
router.get('/', registerController.index);
router.post('/', upload.single('avatar'), registerController.store);

router.get('/edit/:userId', registerController.edit);
router.post('/edit', upload.single('avatar'), registerController.update);


//router.get('/', registerController.index);
router.post('/',  registerController.store);

//router.get('/edit/:userId', registerController.edit);
router.post('/edit',  registerController.update);

module.exports = router;


