const img = document.querySelector(".img-prueba");
const input = document.querySelector(".input-prueba");
const seleccionado = document.querySelector(".seleccionado");

img.addEventListener("error",()=>{
    console.log("se ejecuta en caso que ocurra un error");
})
// cuando se carga algo
window.addEventListener("load",()=>{
    console.log("ha cargado el sitio");
})
// antes de que algo se carge
addEventListener("beforeunload",()=>{
    console.log("te estas por ir del sitio");
})
// cuando ya cargo el sitio
addEventListener("unload",()=>{
    console.log("sitio cargado");
})
// cuando se cambia la resolción de la pantalla
addEventListener("resize",()=>{
    console.log("resolución actualizada");
})
// luego esta scroll, select (se aplica al input y al textarea)
input.addEventListener("select",(e)=>{
    console.log(`la seleccion enpieza en ${e.target.selectionStart} y termina en ${e.target.selectionEnd}`);
})
input.addEventListener("select", (e) => {
    let inicio = e.target.selectionStart;
    let fin = e.target.selectionEnd;
    let textoCompleto = input.value;
    seleccionado.innerHTML = textoCompleto.substring(inicio, fin);
})