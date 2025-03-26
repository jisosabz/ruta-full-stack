let nombres = ["Jazmín", "Antonio", "Erodita", "Mocha", "Michi'i"];

// metodo filter (se puede condicionar)

nombres.filter((nombre) => document.write(nombre + "<br>"))

resultado = nombres.filter(nombres => nombres.length > 6);
document.write(resultado);
// metodo filter