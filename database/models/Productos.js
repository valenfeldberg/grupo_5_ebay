module.exports = function(sequelize, dataTypes) {
    let alias = "Producto"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        nombre_producto: {
            type: dataTypes.STRING(95),        
        },
        valor: {
            type: dataTypes.INTEGER,        
        },
        ubicacion: {
            type: dataTypes.STRING(95),        
        },
        usado: {
            type: dataTypes.STRING(95),        
        },
        imagen: {
            type: dataTypes.STRING(200),        
        },
        imagen1: {
            type: dataTypes.STRING(200),        
        },
        imagen2: {
            type: dataTypes.STRING(200),        
        },
        imagen3: {
            type: dataTypes.STRING(200),        
        },
        imagen4: {
            type: dataTypes.STRING(200),        
        },
        descripcion: {
            type: dataTypes.STRING(200),        
        },
        user_id: {
            type: dataTypes.INTEGER,        
        },
        categoria_id: {
            type: dataTypes.INTEGER,        
        }, 
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }
    let Productos = sequelize.define(alias, cols, config)



        Productos.associate = function(models){
        Productos.belongsTo(models.Usuario, {
        as: "usuario",
        foreignKey: "user_id"
        });
        }

        Productos.associate = function(models){
        Productos.belongsTo(models.Categoria, {
       as: "categoria",
        foreignKey: "categoria_id"
        });
        }


    return Productos
}