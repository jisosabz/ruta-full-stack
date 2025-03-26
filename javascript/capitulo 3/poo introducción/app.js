class animal {
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
let perro = new animal("pastor alemán", 5, "negro")
perro.verInformacion();