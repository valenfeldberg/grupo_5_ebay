const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs")

const usersFilePath = path.join(__dirname, "./data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {

	users: (req, res) => {
		const user = users;
		res.render("users", { user: user });
	  },

	register: (req, res) => {
		return res.render('register');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		// Busco si el usuario esta en la BD
		const userInDb = (req.body.email);
		const user = users.find(
		  (userElement) => userElement.email === userInDb
		);
					
			if (user != null) {
				return res.render("register", {
					errors: {
						email: {
							msg: "Este email ya esta registrado"
						}
					},
					oldData: req.body
					})
			  } else {
				
	

	
		//	return res.send('Ok, las validaciones se pasaron y no tienes errores');
	
	const { first_name, last_name, email, gender, ubicacion, password } = req.body;
    const newUser = {};
    newUser.id = users[users.length - 1].id + 1;
    newUser.first_name = first_name;
    newUser.last_name = last_name;
    newUser.email = email;
    newUser.gender = gender;
	newUser.ubicacion = ubicacion;
	newUser.password = bcryptjs.hashSync(password)
    newUser.imagen = "/images/avatars/" + req.file.filename;
    console.log(newUser.id);

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users));
	res.redirect("/login");
    
			  }

	},

	delete: (req, res) => {
		const paramId = parseInt(req.params.id);
		const userIndex = users.findIndex(
		  (userElement) => userElement.id === paramId
		);
		users.splice(userIndex, 1);
		res.redirect(`/misPublicaciones`);
		fs.writeFileSync(usersFilePath, JSON.stringify(products))
	  },



	
	login: (req, res) => {
		return res.render('login');
	},
	
	processLogin: (req, res) => {
		/*const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}*/
		
		const userInDb = (req.body.email);
		const user = users.find(
		  (userElement) => userElement.email === userInDb
		);
		console.log(user)
					
			if (user != null) {
				return res.render("login", {
					errors: {
						email: {
							msg: "NO se encuentra este email en nuestra bsae de datos"
						}
					},
					oldData: req.body
					})
			  } else {
				  res.send("hola")
			  }

	},
	  
	profile: (req, res) => {
		const paramId = parseInt(req.params.id);
		const user = users.find(
		  (userElement) => userElement.id === paramId
		);
	
		if (user != null) {
		  res.render("userDetail", { user });
		} else {
		  res.status(404).json({ msg: "No esta el usuario" });
		 
		}
	},
}

module.exports = controller;
