// el primer parametro es una funcion y el segundo es el tiempo en milisegundos
const temporizador = setTimeout(()=>{document.write("hola");},2000);
// parar temporizador
clearTimeout(temporizador);
// para que ejecute una funcion en un intervalo de tiempo hago:
// cada dos segundo manda un hola
const intervalo = setInterval(()=>{
    document.write("hola");
},2000)
// parar intervalo
clearInterval(intervalo);