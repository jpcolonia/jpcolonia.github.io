// Esta función permite editar un apartado
function editar(id, boton) {

    // Buscamos el apartado que queremos editar
    let contenido = document.getElementById(id);

    // Comprobamos si está en modo edición
    if (contenido.contentEditable === "true") {

        // Terminamos la edición
        contenido.contentEditable = "false";

        // Guardamos el contenido
        localStorage.setItem(id, contenido.innerHTML);

        // Cambiamos el texto del botón
        boton.textContent = "Editar";

    } else {

        // Activamos la edición
        contenido.contentEditable = "true";

        // Cambiamos el texto del botón
        boton.textContent = "Guardar";

        // Colocamos el cursor dentro del contenido
        contenido.focus();
    }
}


// GUARDAR CAMBIOS.---------------

function cargarCambios() {

    // Buscamos los tres apartados
    let presentacion = document.getElementById("presentacion");
    let academico = document.getElementById("academico");
    let laboral = document.getElementById("laboral");


    // Cargar presentación
    if (presentacion && localStorage.getItem("presentacion")) {
        presentacion.innerHTML = localStorage.getItem("presentacion");
    }


    // Cargar historial académico
    if (academico && localStorage.getItem("academico")) {
        academico.innerHTML = localStorage.getItem("academico");
    }


    // Cargar historial laboral
    if (laboral && localStorage.getItem("laboral")) {
        laboral.innerHTML = localStorage.getItem("laboral");
    }
}


// Ejecutamos la función cuando se carga la página
cargarCambios();