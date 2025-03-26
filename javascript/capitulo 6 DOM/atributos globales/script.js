const titulo = document.querySelector(".titulo");
// asi todo lo que esta adentro de .titulo puede ser editado por el usuario
// titulo.setAttribute("contentEditable", "true");
// oculta
// titulo.setAttribute("hidden", "true");
// para que se pueda seleccionar ocn el tab, y el indice es el orden con los que se acceden
titulo.setAttribute("tabindex", "0");
// cuando le damos focus aparezca una pequeña descripcion
titulo.setAttribute("title", "new title");