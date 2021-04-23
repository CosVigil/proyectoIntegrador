
const chocolateController = {
    index: function(req, res){
        return res.render('product')
    },
 
    create: function (req, res){
        return res.render('product-add')
    },

    search: function (req, res){
        return res.render('search-results')
    }
}

module.exports = chocolateController;