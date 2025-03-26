const contenedor = document.querySelector(".container");
// muestra el primer elemento hijo
const primerHijo = contenedor.firstElementChild;
const ultimoHijo = contenedor.lastElementChild;
// todos los hijos pero con el texto
const todosLosHijos = contenedor.childNodes;
// todos los hijos pero sin el texto, pero no se puede recorrer con el forEach
const hijos = contenedor.children;
// aca recorrmos todos los hijos
todosLosHijos.forEach(hijo => console.log(hijo));

for(hijo of hijos){
    console.log(hijo);
}

// console.log(primerHijo);
// console.log(ultimoHijo);
// console.log(hijos);