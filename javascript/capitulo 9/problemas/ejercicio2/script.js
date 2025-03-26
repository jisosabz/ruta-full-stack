let alumnos = [
    { nombre: "nombre1", email: "email1", materia: "materia1" },
    { nombre: "nombre2", email: "email1", materia: "materia1" },
    { nombre: "nombre3", email: "email3", materia: "materia3" },
    { nombre: "nombre4", email: "email4", materia: "materia4" },
    { nombre: "nombre5", email: "email5", materia: "materia5" },
    { nombre: "nombre6", email: "email6", materia: "materia6" }
];

const contenedor = document.querySelector(".grid-container")
const boton = document.querySelector(".boton-confirmar");

// para ahorrar recursos
let htmlCode = "";

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida" name="" id="">
                <option value="semana 1">semana 1</option>
                <option value="semana 2">semana 2</option>
            </select>
        </div> 
    `;
}
contenedor.innerHTML = htmlCode;

boton.addEventListener("click", ()=>{
    let confirmar = confirm("confirmar?");
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanaElegida = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
            semana = elementos[elemento];
            semana.innerHTML = semanaElegida[elemento].value;
        }
    }
})