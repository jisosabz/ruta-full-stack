const peticion = new XMLHttpRequest();
// esto sirve para ver los estados del readyState
// vieja forma
peticion.addEventListener("readystatechange", () => {
    // console.log(peticion.readyState);
    // si peticion.readyState es igual a 1, es decir que se ha abierto la conexión, si es igual a 2, es decir que se ha recibido la cabecera, si es igual a 3, es decir que se está descargando la información, si es igual a 4, es decir que se ha completado la petición
    // console.log(peticion.responseText);
    if (peticion.readyState === 4 && peticion.status === 200) {
        console.log(peticion.responseText);
    }
});
// nueva vorma
peticion.addEventListener("load", () => {
    console.log(peticion.responseText);
});
// este método sirve para pedir información
peticion.open("GET", "informacion.text");
peticion.send();
