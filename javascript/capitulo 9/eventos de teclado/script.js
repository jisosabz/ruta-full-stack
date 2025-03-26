const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".container");

input.addEventListener("keydown",()=>{
    console.log("una tecla fue presionada");
})
input.addEventListener("keypress",()=>{
    console.log("presionada y soltada");
})
input.addEventListener("keyup",()=>{
    console.log("una tecla fue soltada");
})