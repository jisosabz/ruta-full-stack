let cadenaCero = "cadena de prueba cero";
let cadenaUno = "cadena";
let cadenaDos = "cero";
/*estas fueron las más sencillas*/ 
resultado = cadenaCero.concat(" hola");
resultado = cadenaCero.startsWith(cadenaUno);
resultado = cadenaCero.endsWith(cadenaDos);
resultado = cadenaCero.includes(cadenaUno);
resultado = cadenaCero.indexOf("de");
//si nos devuelve -1 es porque no existe
resultado = cadenaCero.lastIndexOf("de");
resultado = cadenaDos.padStart(6,"a");
resultado = cadenaDos.padEnd(6,"a");
resultado = cadenaDos.repeat(6);
/*estas fueron las menos sencillas pero igual de sencillas*/ 
resultado = cadenaCero.split(" ");//devuelve un array
resultado = cadenaCero.substring(0,7);
resultado = cadenaCero.toLocaleLowerCase();
resultado = cadenaCero.toLocaleUpperCase();
resultado = cadenaCero.toString();
resultado = cadenaCero.trim();
document.write(resultado);