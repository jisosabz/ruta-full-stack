class Celular {
    constructor (color, peso, pantalla, camara, ram){
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }
    // creando métodos
    prender(){
        if(this.encendido == false){
            alert("Encendido");
            this.encendido = true;
        }else{
            alert("Ya esta encedido");;
        }
    }
    apagar(){
        if(this.encendido == true){
            alert("Apagado");
            this.encendido = false;
        }else{
            alert("Ya esta apagado");
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciado");
            this.encendido = true;
        }else{
            alert("El celular está apagado");
        }
    }
    tomarFoto(){
        if(this.encendido == true){
            alert(`la foto fue tomada con una resolución de ${this.camara}`);
        }else{
            alert("El celular está apagado");
        }
    }
    tomarVideo(){
        if(this.encendido == true){
            alert(`el video fue grabado con una resolución de ${this.camara}`);
        }else{
            alert("El celular está apagado");
        }
    }
    mobileInfo(){
        return `
        color: <b>${this.color}</b><br>
        Peso:<b>${this.peso}</b><br>
        Tamaño:<b>${this.pantalla}</b><br>
        Cámara:<b>${this.camara}</b><br>
        ram:<b>${this.ram}</b><br>
        `
    
    }
    // creando getter and setter
}
class Premium extends Celular {
    constructor (color, peso, pantalla, camara, ram, camaraLenta, reconocimientoFacial, camaraExtra){
        super(color, peso, pantalla, camara, ram);
        this.camaraLenta = camaraLenta;
        this.reconocimientoFacial = reconocimientoFacial;
        this.camaraExtra = camaraExtra;
    }
    mobileInfoPremium(){
        return `${this.mobileInfo()}` + `
        Camara lenta: <b>${this.camaraLenta}</b><br>
        Face ID:<b>${this.reconocimientoFacial}</b><br>
        Cámara Extra:<b>${this.camaraExtra}</b><br>`
        ;
    }
}


// celulares normales
celularUno = new Celular("negro", "200 gramos", "full hd","50 mgp","6GB" );
celularDos = new Celular("negro", "300 gramos", "hd","20 mgp","8GB" );
celularTres = new Celular("negro", "250 gramos", "full hd 5k","40 mgp","4GB" );
// celulares premium
celularPremium1 = new Premium("negro", "100 gramos","Dynamic AmoLed Gorilla Glass Victus II", "150mgp","12 GB", "12mgp", "super rápido", "30mgp")
// celularUno.prender();
// celuarDos.reiniciar();
document.write(`
    celular 1:<br> ${celularUno.mobileInfo()} <br>
    celular 2:<br> ${celularDos.mobileInfo()} <br>
    celular 3:<br> ${celularTres.mobileInfo()} <br>
    celular 4:<br> ${celularPremium1.mobileInfoPremium()} <br>`);