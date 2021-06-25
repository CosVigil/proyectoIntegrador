module.exports = function (sequelize, dataTypes){

//definir un alias
let alias='User';

//describir la configuración de las columnas de la tabla
let cols = {
    id:{
        autoincrement: true,
        primaryKey: true, 
        type: dataTypes.INTEGER, 
    },
    nombre:{
        type: dataTypes.STRING,
    },
    apellido:{
        type: dataTypes.STRING,
    },
    dni:{
        type: dataTypes.INTEGER, 
    },
    email:{
        type: dataTypes.STRING,
    },

    avatar:{
        type: dataTypes.STRING,
    },
    password:{
        type: dataTypes.STRING,
    },
    birthDate:{
        type: dataTypes.DATE, 
    },
    
    avatar: {
        type: dataTypes.STRING
    }
 
}




let config ={
    tableName: 'users',
    timestamps: true,

}

const User = sequelize.define(alias, cols, config);

User.associate = function(models){
    User.hasMany(models.Product,{
        as:'products',
        foreignKey: 'userId'
    })
    User.hasMany(models.Comment,{
        as:'ComentarioDelUsuario',
        foreignKey: 'userId'
    })
}

return User;



}
