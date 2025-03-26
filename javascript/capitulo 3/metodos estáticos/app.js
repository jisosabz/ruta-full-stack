class Animal {
    constructor (especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    }
    // creando un método
    verInformacion(){
        document.write(this.informacion);
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie,edad, color);
        this.raza = raza;
    }
    // esto es un método estático, se ejecuta sin necesidad de ser instanciado
    static ladrar(){
        alert("waw");
    }
}
// pero se pone la clase perro, no el objeto perro

Perro.ladrar();