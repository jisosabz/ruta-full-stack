// // seleccionamos el boton
const button = document.querySelector(".button");
const contenedor = document.querySelector(".container");
// // agregamos al boton un oyente de eventos y le pasamos lo que va a hacer
// button.addEventListener("click",saludar);
// function saludar(){
//     alert("hola");
//     // luego que se ejecuta una vez ya no se vuelve a ejecutar
//     button.removeEventListener("click",saludar);
// }

/*primero se va ejecutar el más especifico, es decir el botton
para que se ejecute primero el contenedor le pasamos al escucha el parametro true*/ 
button.addEventListener("click",(evento)=>{
    alert("di click en el botton");
});

contenedor.addEventListener("click", (evento) => {
    alert("di click en el contenedor");
    evento.stopPropagation();
},true);
/*pero para el el evento no se propage entre sus contenedores lo que se hace es agregar el .stopPropagation()*/ 

