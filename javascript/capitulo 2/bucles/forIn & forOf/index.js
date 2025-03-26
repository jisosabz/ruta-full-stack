let animales = ["gato", "perro", "tRex"]
// devuelve la posición del array
for (animal in animales){
    document.write(animal + "<br>");    
}

document.write("<br>");

// devuelve el elemento
for (animal of animales){
    document.write(animal + "<br>");
}