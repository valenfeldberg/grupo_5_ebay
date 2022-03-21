let db = require("../../database/models")

const controller = {
	users: (req, res) => {		
		db.Usuario.findAll()
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    count: users.length,
                    url: 'api/users'
                },
                users: users,
               // url: "/userDetail/" + users[i].id
            }
                res.json(respuesta);
            })
	  },
      
      

      profile: (req, res) => {
		
        const paramId = parseInt(req.params.id);
        db.Usuario.findByPk(paramId)
        .then(user => {
            let respuesta = {                
                user: user,               
            }
              const nuevoObjeto = {                
                user: {
                    id: respuesta.user.id,
                    first_name: respuesta.user.first_name,
                    last_name: respuesta.user.last_name,
                    email: respuesta.user.email,
                    gender: respuesta.user.gender,
                    ubicacion: respuesta.user.ubicacion,                       
                    imagen: respuesta.user.imagen
                }
              }   
                res.json(nuevoObjeto);
            })		
	},
}

module.exports = controller;
