
const loginController = {
    index: function (req, res){
        	return res.render('login')
        },
        show: function (req, res){
            let id = req.params.id;
            let resultado ='';
    
        },
    
        create: function (req, res){
            return res.render('product-add')
        },
        login: function (req, res){
            return res.render('login')
        },
    }
    


module.exports = loginController;