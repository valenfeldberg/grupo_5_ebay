window.addEventListener("load", function () {
  let formularioCrear = this.document.querySelector("form.crear");
  if (formularioCrear == null) {
  } else {
    formularioCrear.addEventListener("submit", function (e) {
      let erroresCrear = [];
      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = "";
      let campoNombre = document.querySelector('input[name="nombre_producto"]');
      let campoDescripcion = document.querySelector(
        'input[name="descripcion"]'
      );
      let campoImagen = document.querySelector('input[name="imagen"]');

      if (campoNombre.value == "") {
        erroresCrear.push(
          "El campo de nombre de producto tiene que estar completo"
        );
      } else if (campoNombre.value.length < 5) {
        erroresCrear.push(
          "El campo de nombre de producto debe tener al menos 5 caracteres"
        );
      }

      if (campoDescripcion.value.length < 20) {
        erroresCrear.push(
          "El campo descripcion debe tener al menos 20 caracteres"
        );
      }

      if (campoImagen.value == "") {
        erroresCrear.push("Se debe seleccionar una imagen");
      } else if (!/(.jpg|.jpeg|.png|.gif)$/i.exec(campoImagen.value)) {
        erroresCrear.push("La imagen debe ser JPG, JPEG, PNG, GIF");
      }

      if (erroresCrear.length > 0) {
        e.preventDefault();

        for (let i = 0; i < erroresCrear.length; i++) {
          ulErrores.innerHTML += "<li>" + erroresCrear[i] + "</li>";
        }
      }
    });
  }

  let formulario = this.document.querySelector("form.register");
  if (formulario == null) {
  } else {
    formulario.addEventListener("submit", function (e) {
      let errores = [];
      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = "";
      console.log("ssssssssssssssssss");
      console.log(errores.length);
      let campoNombre = document.querySelector('input[name="first_name"]');
      let campoApellido = document.querySelector('input[name="last_name"]');
      let campoEmail = document.querySelector('input[name="email"]');
      let campoPassword = document.querySelector('input[name="password"]');
      let campoAvatar = document.querySelector('input[name="avatar"]');

      if (campoNombre.value == "") {
        errores.push("El campo de nombre tiene que estar completo");
      } else if (campoNombre.value.length < 2) {
        errores.push("El campo de nomnbre debe tener al menos 2 caracteres");
      }

      if (campoApellido.value == "") {
        errores.push("El campo de Apellido tiene que estar completo");
      } else if (campoApellido.value.length < 2) {
        errores.push("El campo de Apellido debe tener al menos 2 caracteres");
      }

      if (campoEmail.value == "") {
        errores.push("El campo de Email tiene que estar completo");
      } else if (!/\S+@\S+\.\S+/.test(campoEmail.value)) {
        errores.push("El campo de Email tiene que ser del tipo valido");
      }

      if (campoPassword.value == "") {
        errores.push("El campo de Password tiene que estar completo");
      } else if (campoPassword.value.length < 8) {
        errores.push("El campo de Password debe tener al menos 8 caracteres");
      }

      if (campoAvatar.value == "") {
        errores.push("Se debe seleccionar una imagen");
      } else if (!/(.jpg|.jpeg|.png|.gif)$/i.exec(campoAvatar.value)) {
        errores.push("La imagen debe ser JPG, JPEG, PNG, GIF");
      }

      if (errores.length > 0) {
        e.preventDefault();

        for (let i = 0; i < errores.length; i++) {
          ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
        }
      }
    });
  }

  let formularioLogin = this.document.querySelector("form.login");
  if (formularioLogin == null) {
  } else {
    formularioLogin.addEventListener("submit", function (e) {
      let erroresLogin = [];
      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = "";

      let campoLoginEmail = document.querySelector('input[name="email"]');
      let campoLoginPassword = document.querySelector('input[name="password"]');

      if (campoLoginEmail.value == "") {
        erroresLogin.push("El campo de Email tiene que estar completo");
      } else if (!/\S+@\S+\.\S+/.test(campoLoginEmail.value)) {
        erroresLogin.push("El campo de Email tiene que ser del tipo valido");
      }

      if (campoLoginPassword.value == "") {
        erroresLogin.push("El campo de Password tiene que estar completo");
      } else if (campoLoginPassword.value.length < 8) {
        erroresLogin.push(
          "El campo de Password debe tener al menos 8 caracteres"
        );
      }

      if (erroresLogin.length > 0) {
        e.preventDefault();

        for (let i = 0; i < erroresLogin.length; i++) {
          ulErrores.innerHTML += "<li>" + erroresLogin[i] + "</li>";
        }
      }
    });
  }
});

window.onload = function () {
  // Variables
  const IMAGENES = [
    "../images/banner_1.jpg",
    "../images/banner_2.jpg",
    "../images/banner_3.jpg",
    "../images/banner_3.png",
    "../images/banner2.png",
    "../images/barter2.jpg",
  ];
  const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
  let posicionActual = 0;

  let $imagen = document.querySelector("#imagen");

  let intervalo;

  function pasarFoto() {
    if (posicionActual >= IMAGENES.length - 1) {
      posicionActual = 0;
    } else {
      posicionActual++;
    }
    renderizarImagen();
  }

  // Funciones
  function renderizarImagen() {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
  }

  /**
   * Activa el autoplay de la imagen
   */
  function playIntervalo() {
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    // Desactivamos los botones de control
  }

  /**
   * Para el autoplay de la imagen
   */

  // Eventos

  // Iniciar
  renderizarImagen();
  playIntervalo();
};
