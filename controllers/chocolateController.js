const db = require('../db');
const op = db.Sequelize.Op;

const chocolateController = {
    index: function(req, res){
        return res.render('product')
    },
 
    create: function (req, res){
        return res.render('product-add')
    },

    search: function (req, res){
        let query = req.query;
        return res.send(query.search);
        //return res.render('search-results')

        db.search.findAll()
        .then()
        .catch(error => {
            console.error();
        })
    }
}

module.exports = chocolateController;