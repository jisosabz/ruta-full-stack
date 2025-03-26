const input = document.querySelector(".input-normal");
document.write("este es el nombre de la clase del input: "+input.className+"<br>");
document.write("este es el value del input: "+input.value+"<br>");
// modificamos el type del input
input.type = "text";
//podemos especificar el tipo de archivo que elijamos
input.accept = "image/png";
// minima cantidad de caracteres
input.minLength = 3;