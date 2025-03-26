let alto = window.screen.availHeight; 
let ancho = window.screen.availWidth; 

comprar = confirm(`El alto es ${alto} y el ancho es ${ancho}`);
if (comprar) {
    alert("Compra realizada");
} else {
    alert("Compra cancelada");
} 
