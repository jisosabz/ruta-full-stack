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
    ladrar(){
        alert("waw");
    }
}

let perro = new Perro("canino", 5, "negro", "doberman");
perro.verInformacion();
perro.ladrar();