// Propiedades de Childs (Hijos)
// Se usan para obtener o interactuar con los hijos de un elemento del DOM.

//     firstChild
//         Devuelve el primer hijo del nodo, incluyendo nodos de tipo texto, comentario, etc.
//         Ejemplo:

let primerHijo = elemento.firstChild;
console.log(primerHijo);

// lastChild

//     Devuelve el último hijo del nodo, también incluye nodos no elementales.
//     Ejemplo:

let ultimoHijo = elemento.lastChild;

// firstElementChild

//     Devuelve el primer hijo elemento (excluye nodos de texto o comentarios).
//     Ejemplo:

let primerElemento = elemento.firstElementChild;

// lastElementChild

//     Devuelve el último hijo que sea un elemento (ignora nodos de texto o comentarios).
//     Ejemplo:

let ultimoElemento = elemento.lastElementChild;

// childNodes

//     Devuelve todos los nodos hijos (elementos, texto, comentarios) como una NodeList.
//     Ejemplo:

let hijos = elemento.childNodes;

// children

//     Devuelve sólo los nodos hijos que son elementos (tipo HTMLElement).
//     Ejemplo:

let elementosHijos = elemento.children;

// Métodos de Childs (Hijos)

// Permiten modificar o comprobar los hijos de un elemento.

//     replaceChild()
//         Reemplaza un hijo existente con un nuevo nodo.
//         Sintaxis:

elemento.replaceChild(nuevoNodo, nodoExistente);

// removeChild()

//     Elimina un nodo hijo del elemento.
//     Sintaxis:

elemento.removeChild(nodoHijo);

// hasChildNodes()

//     Verifica si un nodo tiene hijos. Devuelve true o false.
//     Ejemplo:

if (elemento.hasChildNodes()) {
    console.log("Tiene hijos");
}

// Propiedades de Parents (Padres)

// Para acceder al nodo padre de un elemento.

//     parentElement
//         Devuelve el elemento padre más cercano (tipo HTMLElement) o null si no existe.
//         Ejemplo:

let padre = elemento.parentElement;

// parentNode

//     Devuelve el nodo padre, que puede incluir elementos, documentos o nodos de tipo texto.
//     Ejemplo:

let nodoPadre = elemento.parentNode;

// Propiedades de Siblings (Hermanos)

// Para acceder a los nodos hermanos de un elemento.

//     nextSibling
//         Devuelve el siguiente nodo hermano (puede incluir nodos de texto o comentarios).
//         Ejemplo:

let hermanoSiguiente = elemento.nextSibling;

// previousSibling

//     Devuelve el nodo hermano anterior (incluye texto o comentarios).
//     Ejemplo:

let hermanoPrevio = elemento.previousSibling;

// nextElementSibling

//     Devuelve el siguiente hermano que sea un elemento (excluye texto o comentarios).
//     Ejemplo:

let siguienteElemento = elemento.nextElementSibling;

// previousElementSibling

//     Devuelve el hermano anterior que sea un elemento.
//     Ejemplo:

let elementoAnterior = elemento.previousElementSibling;

// Nodo - Extras

// closest()
//     Busca el elemento más cercano al actual que coincida con un selector CSS.
//     Ejemplo:

let contenedor = elemento.closest(".clase-contenedor");
