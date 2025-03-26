const peticion = new XMLHttpRequest();
// esto sirve para ver los estados del readyState
// nueva vorma
peticion.addEventListener("load", () => {
    let respuesta;
    if (peticion.status === 200) {
        respuesta = peticion.responseText;
    } else {
        respuesta = "Lo siento, no se ha encontrado el archivo";
    }
    // la respuesta se recibe serializada, hay que deserializarla medioante JSON.parse
    console.log(JSON.parse(respuesta));

});
// este método sirve para pedir información
peticion.open("GET", "informacion.txt");
peticion.send();
