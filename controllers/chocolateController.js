
const chocolateController = {
    index: function(req, res){
        return res.render('product')
    },
    show: function (req, res){
        let id = req.params.id;
        let resultado ='';

    },

    create: function (req, res){
        return res.render('product-add')
    },

    search: function (req, res){
        return res.render('search-results')
    }
}

module.exports = chocolateController;