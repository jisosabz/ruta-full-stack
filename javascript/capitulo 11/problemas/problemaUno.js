const sendButton = document.getElementById('enviar-nota');
sendButton.addEventListener("click",()=>{
    let resultado, mensaje;
    try {
        resultadoPrevio = parseInt(document.getElementById('nota').value);
        if(isNaN(resultadoPrevio)){
            throw ("debe ser un número");
        }
        mensaje = definirMensaje(resultadoPrevio);
        if (mensaje=="pasaste" & mensaje!=null){
            resultado = "felicidades";
        }else if(mensaje=="no pasaste"){
            resultado = "esfuerzate más la proxima";
        }else if(mensaje == null){
            resultado = "nota fuera de rango";
        }
    } catch (error) {
        resultado = "error";
        mensaje = "error";
    }
    abrirModal(resultado, mensaje);
})

const abrirModal = (resultado, mensaje)=>{
    console.log(resultado);
    console.log(mensaje);
}
const definirMensaje = (p)=>{
    switch (p) {
        case 1:
            resultado = "no pasaste"
            break;
        case 2:
            resultado = "no pasaste"
            break;
        case 3:
            resultado = "no pasaste"
            break;
        case 4:
            resultado = "no pasaste"
            break;
        case 5:
            resultado = "no pasaste"
            break;
        case 6:
            resultado = "no pasaste"
            break;
        case 7:
            resultado = "pasaste"
            break;
        case 8:
            resultado = "pasaste"
            break;
        case 9:
            resultado = "pasaste"
            break;
        case 10:
            resultado = "pasaste"
            break;
        default:
            resultado = null;
            break;
    }
    return resultado;
}