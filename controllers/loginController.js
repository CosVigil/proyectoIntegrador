const bcrypt = require('bcryptjs');
const db = require('../database/models');

const op = db.Sequelize.Op;

let loginController = {
    index: function(req, res){
        //Mostramos el form de login
        return res.render('login');
    },
    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( user => {
            if(bcrypt.compareSync(req.body.password, user.password)){

                req.session.user = user;
                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
                }

            }
            console.log('en login controller');
            console.log(req.session.user);

            //Si tildó recordame => creamos la cookie.

            return res.redirect('/');
            
        })
        .catch( e => {console.log(e)})

    }, 
    logout: function(req,res){
        req.session.destroy()
        res.clearCookie('userId')
        return res.redirect('/')
    }


    
}

module.exports = loginController;