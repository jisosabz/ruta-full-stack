/*
#objetos fundamentales y básicos sobre funciones y errores:
    Object
    Function
    Boolean
    Symbol
    Error
    InternalError
    RangeError
    ReferenceError
    SyntaxError
    TypeError
    URIError
*/

// try {
//     aquiCometoUnError
// } catch (error) {
//     // en esta linea muestra el tipo de error
//     console.log(typeof error);
// } finally {
//     console.log("me muestro a toda costa");
// }

try {
    // lanza un error 
    throw "puto";
} catch (error) {
    console.log(error);
}