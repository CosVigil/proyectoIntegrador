const catalogo = require('../catalogo/index');

const chocolateController = {
    index: function(req, res){
        return res.render('product', {producto: catalogo.lista})
    },
    show: function (req, res){
        let id = req.params.id;
        let resultado ='';

    },

    create: function (req, res){
        return res.render('product-add')
    }
}

module.exports = chocolateController;