const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".container-1");
const contenedor2 = document.querySelector(".container-2");
// evento doble click
button.addEventListener("dblclick",()=>
    alert("le diste doble click")
);
// evento mouse over
contenedor1.addEventListener("mouseover",()=>
    alert("le diste over al contenedor menor")
);
// evento mouse out
contenedor2.addEventListener("mouseout",()=>
    alert("saliste del contenedor mayor")
);
// contextmenu (click derecho para abrir menu)
// mouseenter (puntero se mueve fuera del elemento)
// mouseup  (suelta el boton del mause sobre un elemento)
// mousemove (cuando el puntero se mueve mienstras esta sobre un elemento)
