
let db = require("../database/models")
const Op = db.Sequelize.Op
const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs")
const session = require("express-session");
const { send } = require('process');
const req = require('express/lib/request');


const usersFilePath = path.join(__dirname, "./data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {



	users: (req, res) => {

		db.Usuario.findAll()
		.then(function(user) {
		  return res.render("users", { user: user });
		})
		
		/*const user = users;
		res.render("users", { user: user });*/
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
		db.Usuario.create({    
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
			password: bcryptjs.hashSync(req.body.password),
			country: req.body.country,
            imagen : "/images/avatars/" + req.file.filename,
            descripcion: req.body.descripcion,   
           
        })                
		res.redirect("/login");	


		/*
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
						const { first_name, last_name, email, gender, country, password } = req.body;
						const newUser = {};
						newUser.id = users[users.length - 1].id + 1;
						newUser.first_name = first_name;
						newUser.last_name = last_name;
						newUser.email = email;
						newUser.gender = gender;
						newUser.ubicacion = country;
						newUser.password = bcryptjs.hashSync(password)
						newUser.imagen = "/images/avatars/" + req.file.filename;
						console.log(newUser.id);

						users.push(newUser);
						fs.writeFileSync(usersFilePath, JSON.stringify(users));
						res.redirect("/login");		
				}
*/
	},

	delete: (req, res) => {
		
		db.Usuario.destroy({
			where: {
			  id:req.params.id
			}
		  })
		  res.redirect(`/logout`);
		
		/*const paramId = parseInt(req.params.id);
		const userIndex = users.findIndex(
		  (userElement) => userElement.id === paramId
		);
		users.splice(userIndex, 1);
		res.redirect(`/logout`);
		fs.writeFileSync(usersFilePath, JSON.stringify(users))*/
	  },



	
	login: (req, res) => {
	
		return res.render('login');
	},
	
	processLogin: (req, res) => {		
		
		db.Usuario.findAll({
			where: {
					email: req.body.email
				  }
			  }).then(function(user) {
				  
				if (user.length != 0) {
					if (bcryptjs.compareSync(req.body.password, user[0].password)) {
						req.session.userLogged = user[0]	
						res.redirect("userDetail")
							
			  		}
				}
			  })
		/*const userInDb = (req.body.email);
		const user = users.find(
		  (userElement) => userElement.email === userInDb
		);
					
			if (user == null) {
				return res.render("login", {
					errors: {
						email: {
							msg: "No se encuentra este email en nuestra bases de datos"
						}
					},
					oldData: req.body
					})
			  } else {	
				 
				const isOkPassword = bcryptjs.compareSync(req.body.password, user.password)
				  if (isOkPassword) {
				 // delete user.password
				  req.session.userLogged = user	

				  if(req.body.remember_user) {
					
					  res.cookie("userEmail", req.body.email, {maxAge: (1000 * 60) * 60})
					  
				  }			 
				  return res.redirect("userDetail")
			  	}
					return res.render("login", {
						errors: {
							email: {
								msg: "La contraseña es incorrecta"
							}
						},
							oldData: req.body
				})
			}*/
		
		
		
		/*
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
				
			}*/
	},
	  
	profile: (req, res) => {
		
		return res.render("userDetail", {
			user: req.session.userLogged
		})
		
		/*
		const paramId = parseInt(req.params.id);
		const user = users.find(
		  (userElement) => userElement.id === paramId
		);
	
		if (user != null) {
		  res.render("userDetail", { user });
		} else {
		  res.status(404).json({ msg: "No esta el usuario" });
		 
		}*/
	},

	logout:(req, res) => {	
		res.clearCookie("userEmail")
		req.session.destroy()
		return res.redirect("/")
	}
}

module.exports = controller;
