module.exports = function(sequelize, dataTypes) {
    let alias = "Categoria"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        categoria: {
            type: dataTypes.STRING
        },              
    }

    let config = {
        tableName: "categoria",
        timestamps: false
    }
    let Categoria = sequelize.define(alias, cols, config)

   // Usuarios.associate = function(models) {
  //      Usuarios.hasMany(models.Producto, {
  //          as: "producto",
  //          foeringKey: "user_id"
  //      })
 //   }

    return Categoria
}