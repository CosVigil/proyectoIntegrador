const db = require('../database/models');
const op = db.Sequelize.Op;

const chocolateController = {
    index: function(req, res){
        return res.render('product')
    },
 
    show: function (req, res){
        let id = req.params.id;

        db.Product.findByPk(id)
          .then(data => {
              return res.render('product', { product:data } )
          })
          .catch(error =>{
              console.log(error);
          })
    },

    search: function (req, res){
        let data = req.query.search;

        db.Product.findAll({
            where: [
                {productName: {[op.like]: '%'+data+'%'}}
            
        ]})
        .then(data => {
            return res.render('index', {products: data});
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
        let datas = req.body;
        //return res.send(datas);

        //2)crear nuevo producto
        let chocolate = {
            productName: datas.productName,
            image: datas.image,
            descripción: datas.descripción,
            userId: datas.userId,
        }

       

        //3)guardar producto
        db.Product.create(chocolate)
        .then (chocolate =>{
       //4)redireccion
            return res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        })

        
    },

    new: function(req, res){
    //mostrará los últimos productos agregados de forma descendente
    db.Product.findAll({
      order: ['comments', 'DESC'] 

    })
       .then(data =>{
           //procesamos resultados
           return res.render('new', { product: data})
          
       })
       .catch(error => {
        console.log(error);
    })
    
    },

    destroy: function(req, res){
       let chocolateABorrar = req.params.id;

       db.Product.destroy({
          where: [
              {id: chocolateABorrar}
              
          ]
       })
         .then(() =>{
             return res.redirect('/');
         } )
         .catch( error =>{
            console.log(error);

        })

    }

    


}

module.exports = chocolateController;