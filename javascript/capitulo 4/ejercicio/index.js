const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["pedro", "juan", "Iván", "Jazmín"],
        programacion: ["pedro", "juan", "Iván", "Jazmín"],
        logica: ["pedro", "juan", "Iván", "Jazmín"],
        cálculo: ["pedro", "juan", "Iván", "Jazmín"]
    }
    if (materias[materia] !== undefined){
        return materias[materia];
    }else{
        return "materia inexistente";
    }
}
let informacion = obtenerInformacion("fisi   ca");
document.write(informacion);