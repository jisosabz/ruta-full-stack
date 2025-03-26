/*
// Función principal que recibe un callback
function procesarUsuario(nombre, callback) {
    console.log(`Procesando el nombre: ${nombre}`);
    
    // Llamamos al callback con el resultado
    callback(nombre);
}

// Definimos el callback
function mostrarSaludo(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido.`);
}

// Llamamos a la función principal, pasándole el callback
procesarUsuario("Juan", mostrarSaludo);

*/ 

class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};
const data = 
[
    ["persona 1", "@nickname1"],
    ["persona 2", "@nickname2"],
    ["persona 3", "@nickname3"],
    ["persona 4", "@nickname4"],
];
const personas = [];
for(let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
}
// console.log(personas);
const obtenerPersona = (id,callback)=>{
    if(personas[id] == undefined){
        callback("no se ha encontrado la persona");
    }else{
        callback(null,personas[id]);
    }
};
obtenerPersona(1,(err,persona)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(persona.nombre);
        console.log(persona.instagram);
    }
});