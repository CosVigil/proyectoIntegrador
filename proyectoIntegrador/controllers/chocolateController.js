const catalogo = require('../catalogo/index');

const chocolateController = {
    index: function(req, res){
        return res.render('index', {producto: catalogo.lista})
    },
    show: function (req, res){
        let id = req.params.id;
        let resultado ='';

        //for (let i=0; i<catalogo.lista.length; i++){
          //  if (id == catalogo.lista[i].id){
           //     resultado = '';
           //     return res.render (resultado);
          //  }
       // }
    }
}

module.exports = chocolateController;