const peticion = new XMLHttpRequest();

peticion.addEventListener('load', () => {
    let respuesta;
    if (peticion.status === 200) {
        respuesta = peticion.responseText;
    } else {
        respuesta = "Ha ocurrido un error";
    }
    console.log(JSON.parse(respuesta));
});
peticion.open("POST", "informacion.txt");
peticion.send();    