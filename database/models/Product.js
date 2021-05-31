module.exports = function (sequelize, dataTypes){

    //definir un alias
    let alias='Product';

    //describir la configuración de las columnas de la tabla
   
     
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER, 
        },
        productName:{
            type: dataTypes.STRING,
        },
        image:{
            type: dataTypes.STRING,
        },
        userId:{
            type: dataTypes.INTEGER, 
        },
        
       

       }



    let config ={
        table: 'products',
        timestamps: true,

    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.User,{
            as: 'user',
            foreignKey: 'userId'
        } ),

        Product.associate = function (models){
            Product.hasMany(models.Comments, {
                as:'comments',
                foreignKey:'productId'
            })
        }

        
    }

    return Product;

}