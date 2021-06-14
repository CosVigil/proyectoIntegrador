const db = require('../database/models');
const op = db.Sequelize.Op;

const chocolateController = {
    index: function(req, res){
        return res.render('product')
    },
 
    show: function (req, res){
        let id = req.params.id;

        db.Product.findByPk(id,{
            include : [
                {association : 'user'},
                //{association : 'comment'}
                
            
            ]
        })
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
        //control de acceso
         
        if(req.session.user ==undefined){
            return res.redirect("/login");
        } else{
            db.User.findAll()
            .then( data => {
                return res.render('product-add', {users:data});
            })
            .catch(error => {
                console.log(error);
            })
        }

        //mostrar formulario de carga de nuevos chocolates
        //return res.render('product-add')

            
          


    },
    store: function(req, res){
        //metodo para guardar nuevo producto
        //1)obtener datos del formulario
        let datas = req.body;
        //return res.send(datas);

        //2)crear nuevo producto
        let chocolate = {
            productName: datas.productName,
            image: req.file.filename,
            descripción: datas.descripción,
            userId: req.session.user.id,
        }
       //return res.send(req.body)
       

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

    /*new: function(req, res){
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
    
    },*/

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

    },

    /*recomended: function(req, res){
        // Deberá mostrar las películas cuyo rating sea mayor o igual a 8. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.

        db.Movie.findAll({
            where: [
                { rating: {[op.gte]: 8}}
            ],
            order:[
                ['rating', 'DESC']
            ]
        })
            .then(data =>{
                return res.render('new', { movies : data, title: 'Recomendadas'})
            })
            .catch( error => {
                console.log(error);
            })

    
 }*/

}

module.exports = chocolateController;