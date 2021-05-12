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
    password:{
        type: dataTypes.STRING,
    },
    birthDate:{
        type: dataTypes.DATE, 
    },
 
}





let config ={
    table: 'users',
    timestamps: true,

}

const User = sequelize.define(alias, cols, config);

return User;



}
