class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    }
    // creando un método
    verInformacion() {
        document.write(this.informacion);
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }
    // esto es un setter, modifica
    set setRaza(newName) {
        this.raza = newName;
    }
    // esto es un getter, obtiene
    get getRaza() {
        return this.raza;
    }
}

// las instancias se deben hacer con const
const perro = new Perro("perro", 5, "negro", "doberman");

// asi se usan los setters
perro.setRaza = "Canino";
document.write(perro.getRaza);
