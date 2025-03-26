// Variables
const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const materia = document.getElementById("materia");
const formulario = document.getElementById("formulario");
const resultado = document.querySelector(".resultado");

// Escucha el evento submit en el formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene el envío del formulario
    let error = validarCampos();

    // Limpiar clases previas
    resultado.classList.remove("red", "green");

    // Mostrar resultado
    if (error) {
        resultado.classList.add("red");
        resultado.innerHTML = "Nombre no apto.";
    } else {
        resultado.classList.add("green");
        resultado.innerHTML = "Formulario enviado correctamente.";
    }
});

// Función para validar los campos
const validarCampos = () => {
    let error = false;

    // Validar el nombre (entre 5 y 40 caracteres)
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error = true;
    }

    return error;
};
// me quede en el segundo problema de cofla