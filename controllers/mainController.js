const db = require ('../database/models');

let mainController = {
    index: function (req, res){
        db.Product.findAll(
            {order: [['id', 'desc']], 
                include: [{
                    association:"user"
            }]
        
        
        
        
        
        }

            




        )
          .then( data => {
              return res.render ('index', {products: data})

          })
          .catch(error =>{
              console.log(error);
          } )

    }
   

}


module.exports = mainController;

//index: function (req, res){
    //return res.render('index')