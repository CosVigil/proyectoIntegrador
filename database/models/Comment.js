module.exports = function (sequelize, dataTypes){

//definir un alias
let alias='Comment';

//describir la configuración de las columnas de la tabla


let cols = {
    id:{
        autoincrement: true,
        primaryKey: true, 
        type: dataTypes.INTEGER, 
    },
    text:{
        type: dataTypes.STRING,
    },
    userId:{
        type: dataTypes.INTEGER,
    },
    productId:{
        type: dataTypes.INTEGER, 
    },
    
   

   }




let config ={

    tableName: 'comments',
    timestamps: true,

}

const Comment = sequelize.define(alias, cols, config);

Comment.associate = function(models){
    Comment.belongsTo(models.Product,{
        as: 'product',
        foreignKey: 'productId'
    } ),
    Comment.belongsTo(models.User,{
        as: 'user',
        foreignKey: 'userId'
    } )

    
}

return Comment;



}