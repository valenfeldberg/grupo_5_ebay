window.addEventListener('load', function() {
    let formulario = this.document.querySelector("form.register")

    formulario.addEventListener("submit", function(e){
        let errores = []
        let ulErrores = document.querySelector("div.errores ul") 
        ulErrores.innerHTML = ""

        let campoNombre = document.querySelector('input[name="first_name"]')
        let campoApellido = document.querySelector('input[name="last_name"]')
        let campoEmail = document.querySelector('input[name="email"]')
    
        if (campoNombre.value == "") {
            errores.push("El campo de nombre tiene que estar completo")
        } else if (campoNombre.value.length < 2) {
            errores.push("El campo de nomnbre debe tener al menos 2 caracteres")
        }

        if (campoApellido.value == "") {
            errores.push("El campo de Apellido tiene que estar completo")
        } else if (campoApellido.value.length < 2) {
            errores.push("El campo de Apellido debe tener al menos 2 caracteres")
        }



        if (errores.length > 0) {
            e.preventDefault()

            
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })

});