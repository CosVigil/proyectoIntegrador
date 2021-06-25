const session = require('express-session');
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
                {association : 'comments', 
                include: [{ 
                    association: 'user'
                } ]
            }],
                order: [['comments', 'id', 'desc']]
            
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

            include: [{association: "user"}, 
            {association: "comments"}],

            where: [
                {productName: {[op.like]: '%'+data+'%'}}
            
        ]})
        .then(data => {
            return res.render('search-results', {product: data});
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
            }
            
            )
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

    edit: function(req, res){
        //control de acceso
         
        if(req.session.user ==undefined){
            return res.redirect("/login");
        } else{
            db.Product.findByPk(req.params.id)
            .then( data => {
                return res.render('productEdit', {product:data});
            })
            .catch(error => {
                console.log(error);
            }
            
            )
        }
        

        //mostrar formulario de carga de nuevos chocolates
        //return res.render('product-add'

    },

    editProduct: function(req,res){
        //MOstrar el formulario de edición con los datos del producto a editar
      db.Product.findByPk(req.params.id, {

      })
             .then( product => {
                 return res.render('productEdit', {product:product});
             })
             .catch(error => {
                 console.log(error);
             }

             )

    },
    editForm: function(req, res){
        //Qué voy a tomar para editar los datos.
         db.Product.findByPk(req.params.id, {

          })
            //Qué voy a tomar para editar los datos.
    
             .then( product => {
                //return res.send(product)
                let pdtoAeditar = {
                    productName: req.body.productName,
                    image: '',
                }
                 
                if(req.body.productName == ''){
                    pdtoAeditar.productName = product.productName;
                } else {
                    pdtoAeditar.productName = req.body.productName;
                }
                //Si vino imágen en el form => uso esa imagen
                if(req.file == undefined){
                    pdtoAeditar.image = product.image;
                } else{
                    pdtoAeditar.image = req.file.filename
                }
                //else dejo la que está en la base: prodcut.image
    
                db.Product.update(pdtoAeditar, {
                    where:{
                        id: req.params.id
                    }
                })
                .then(function(id){

                
                    return res.redirect('/'); 
                 //A donde redirigir una vez que le producto se actualizó.        
                })
                .catch( e => {console.log(e);} )
    
             })
             .catch( error =>{
                 console.log (error)
             }
                )
    

         
    },

    update: function(req, res){
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

    comentar: function(req, res){

        db.Product.findByPk(req.params.id, {
        })
            .then( product => {
                console.log(product);
                let errors={}
                if(req.body.comentario == ""){
                    errors.message = "Es necesario un comentario";
                    res.locals.errors = errors;
                    return res.render('product')
                } else{
                let comentario = {
                    text: req.body.comentario,          
                    userId: req.body.idUsuario,
                    productId: req.body.idProducto, //pasar id del producto
                }
                db.Comment.create(comentario)
                    .then( (nuevoComentario) => {
                        return res.redirect(`/chocolates/id/${product.id}`); 
                    })
                    .catch(error => {
                        console.log(error);
                    })}

            })
            .catch(error => {
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