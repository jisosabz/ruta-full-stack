const contenedor = document.querySelector(".container");
// creamos un elemento del tipo LI
const item = document.createElement("LI");
const textItem = document.createTextNode("Este es un elemento del item");
item.appendChild(textItem);
contenedor.appendChild(item);
// para agregar varios li y ahorrar recursos 
const fragmento = document.createDocumentFragment();
for (i=0; i<20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "este es un item de la lista";
    fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);