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
        let infoABuscar = req.query;
        return res.send(query.search);
        //return res.render('search-results')

        db.search.findAll({
            where: [
                {title: {[op.like]: '%'+infoABuscar+'%'}}
            
        ]})
        .then(data => {
            return res.render(data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    create: function(req, res){
        //mostrar formulario de carga de nuevos chocolates
        return res.render('product-add')
    },
    store: function(req, res){
        //metodo para guardar nuevo producto
        //1)obtener datos del formulario
        let data = req.body;
        return res.send(data);

        //2)crear nuevo producto
        let chocolate = {
            title: data.title,
            rating: data.rating,
            awards: data.awards,
            release_date: data.release_date,
            length: data.length,
            genre_id: data.genre_id,
        }
        //3)guardar producto
        db.chocolate.create(chocolate)
        .then (chocolate =>{
            return res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        })

        //4)redireccion
    }
}

module.exports = chocolateController;