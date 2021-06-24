const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.User;

let registerController = {
    index: function(req, res){

        if(req.session.user !=undefined){
            return res.redirect("/");
        } else{
        //Mostrar el formulario de registro
        return res.render('register');

         }
    },
    store: function(req, res){ 
        let errors = {}

        //chequear que email no esté vacío
        if(req.body.email == ""){
            errors.message = "El email es obligatorio";
            res.locals.errors = errors;
            return res.render('register')
        }
        if(req.body.password == ""){
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            return res.render('register')
      
        //Chequear que la contraseña no esté vacía    
        }
        if (req.body.password.length < 4){
            errors.message = "La contraseña debe tener al menos 4 caracteres";
            res.locals.errors = errors;
            return res.render('register')
        
        }
            
        
            //Una vez que tenemos la información completa entonces podemos pasar a chequear con base de datos
         else if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype
        !== 'image/jpeg'){
        errors.message = "El archivo debe ser jpg o png";
        res.locals.error = errors;
        return res.render('register')

        } else {
            //Buscamos un usaurio en base al email ingresado.
            users.findOne({
                where: [{email: req.body.email}]
            })
                .then(function(user){
                    //Si find encontró un usuario significa que está en uso ese email por lo que debemos avisarle al usuario que elija otro email
                    if(user != null){
                        errors.message = "El email ya está registrado por favor elija otro.";
                        res.locals.errors = errors;
                        return res.render('register');
                    } else {
         
                      // Guardar un usuario en la db
                     let user = {
                     nombre : req.body.nombre,
                     apellido : req.body.apellido,
                     dni:req.body.dni,
                     email: req.body.email,
                     password: bcrypt.hashSync(req.body.password, 10),
                     birthDate:req.body.birthDate,
                     avatar: req.file.filename
                    }

                    users.create(user)
                    .then( user => {
                        return res.redirect('/login')
                    })
                    .catch(e => {console.log(e)});

    }

})
.catch( error => { console.log(error) })

      }

   },
   edit:function(req, res){
         // mostrar formulario de edicion
    let userId=req.params.userId;   
        //evitar que el usuario cambie el id en la url
    if(userId != req.session.user.id){
        //redireccionar a la ruta del usuario logeado
        return res.redirect(`/register/edit/${req.session.user.id}`)

    }else{

    db.User.findByPk(userId)
    .then (function(user){
        return res.render('userEdit' , {userEdit: user})
    })
    .catch(e => {console.log(e)})

   }},

   update: function(req, res){
       //actualizar usuario
       let user= {
           nombre: req.body.nombre,
           email: req.body.email,
           password: '',
           avatar: '',
       }
       if (req.body.password ==''){
           user.password = req.session.user.password;
       } else {
           user.password = bcrypt.hashSync(req.body.password, 10);
       }
       if (req.file == undefined){
           user.avatar= req.session.user.avatar;
       } else {
           user.avatar= req.file.filename;
       }


       db.User.update(user, {
           where:{
               id: req.session.user.id
           }
       })
       .then(function(id){
        //actualizar los datos de la session y redireccionar a la home

        user.id = req.session.user.id;
        req.session.user = user;
        return res.redirect('/'); 
       })
       .catch(e =>{console.log(e)})
   }
}

    


module.exports = registerController;
