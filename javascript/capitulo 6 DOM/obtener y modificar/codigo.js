// seleccionar un elemento por id 
parrafo = document.getElementById("parrafo");
// seleccionar los elementos de un mismo tipo, se puede acceder a los elementos seleccionados mediante un id como si fuese un array
parrafo = document.getElementsByTagName("p");
// devuelve el primer elemento de un grupo de elementos
parrafo = document.querySelector(".caja");
parrafo = document.querySelector("#parrafo");
// selecciona todos los elementos de un mismo tipo
parrafo = document.querySelectorAll("#parrafo");
// document.write(parrafo);

// ----definir, obtener y eliminar valores de atributos
// modificando el atributo:
const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","range");
// obtenemos el atributo
document.write(rangoEtario.getAttribute("type"));
// removemos el atributo
// document.write(rangoEtario.removeAttribute("type"));