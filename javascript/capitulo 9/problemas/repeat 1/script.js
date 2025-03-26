// variables

const studentName = document.querySelector(".nombre");
const email = document.querySelector(".correo");
const subject = document.querySelector(".materia");
const form = document.getElementById("formulario");
const result = document.querySelector(".resultado");

// eventos

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let error = validarCampos();
    result.classList.remove("error", "correcto");
    if(error){
        result.classList.add("error");
        result.innerHTML = "nombre no apto";
    }else{
        result.classList.add("correcto");
        result.innerHTML = "enviado correctamente";
    }
});

// validad campos

const validarCampos = ()=>{
    let error = false;
    if (studentName.value.length < 5 || studentName.value.length > 40){
        error = true;
    }
    return error; 
}