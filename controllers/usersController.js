const db = require('../database/models');
const op = db.Sequelize.Op;

const usersController = {
    profile: function (req, res){

        db.User.findByPk(req.params.id, {

                include: [{
                    association:"products", 
                    include: [{ association: "comments" },]

                }, { association: "ComentarioDelUsuario" }]
        })




        .then(user => {
            return res.render('profile', {usuario:user})

        })

    },
   

}

module.exports = usersController;