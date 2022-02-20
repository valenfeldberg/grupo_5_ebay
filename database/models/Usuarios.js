module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        gender: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        ubicacion: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },            
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    let Usuarios = sequelize.define(alias, cols, config)

   // Usuarios.associate = function(models) {
  //      Usuarios.hasMany(models.Producto, {
  //          as: "producto",
  //          foeringKey: "user_id"
  //      })
 //   }

    return Usuarios
}