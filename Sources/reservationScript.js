     
   var consola2= console.log("blablabl")
    function validarFormulario() {
        // Obtener valores de los campos del formulario
        var nombre = document.getElementById("nombreForm").value;
        var correo = document.getElementById("mailForm").value;
        var telefono = document.getElementById("phoneForm").value;
        var cubiertos = document.getElementById("cubiertosForm").value;
        var fecha = document.getElementById("start").value;

        // Validar que los campos no estén vacíos
        if(nombre === "" || correo === "" || telefono === "" || cubiertos === "" || fecha === "") {
            alert("Por favor, complete todos los campos.");
            return false;
        }

        // Validar el formato del correo electrónico
        var regexCorreo = /\S+@\S+\.\S+/;
        if(!regexCorreo.test(correo)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return false;
        }

        // Si todo está correcto, enviar el formulario
        alert("¡Gracias por registrarse!");
        return true;
    }