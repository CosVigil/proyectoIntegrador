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
        tableName: 'products',
        timestamps: true,

    }

    const Product = sequelize.define(alias, cols, config);

   

        Product.associate = function (models){
            Product.hasMany(models.Comment, {
                as:'comments',
                foreignKey:'productId'
            }),

        Product.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId',
            
        })
        

        
    }

    return Product;

}