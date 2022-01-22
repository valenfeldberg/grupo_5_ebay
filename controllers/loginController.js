const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "./data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
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

	//	return res.send('Ok, las validaciones se pasaron y no tienes errores');
	
	const { first_name, last_name, email, gender, ubicacion } = req.body;
    const newUser = {};
    newUser.id = users[users.length - 1].id + 1;
    newUser.first_name = first_name;
    newUser.last_name = last_name;
    newUser.email = email;
    newUser.gender = gender;
	newUser.ubicacion = ubicacion;
    newUser.imagen = "/images/avatars/" + req.file.filename;
    console.log(newUser.id);

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users));
	res.redirect("/userDetail/"+newUser.id);
    


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
		return res.render('register');
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
