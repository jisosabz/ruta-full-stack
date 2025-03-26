HTML
Estructura básica de HTML

    <h1>: Solo debe haber un <h1> por página web, ya que representa el título principal del contenido.
    required: Atributo que indica que un campo de entrada (input) es obligatorio.
    name: Identificador del campo input que se utiliza para enviar datos al servidor.
    placeholder: Texto que proporciona un ejemplo o sugerencia de lo que el usuario debe ingresar en un campo input.
    value: Es el valor que se enviará al servidor desde un campo input o form.
    <span>: Etiqueta en línea usada para seleccionar o estilizar partes específicas del contenido.
    <div>: Contenedor de bloque utilizado para agrupar o dividir secciones del contenido.

HTML avanzado

    <select>: Permite al usuario seleccionar una opción de una lista desplegable.
    <datalist>: Proporciona una lista de opciones que pueden autocompletarse cuando se escribe en un campo de texto.
    <fieldset>: Agrupa elementos de un formulario dentro de un cuadro.
    <details> y <summary>: Crean un menú desplegable que muestra un resumen de la información.
    Tablas:
        <tr>: Define una fila de la tabla.
        <td>: Define una celda dentro de una fila.
        <th>: Define una celda de encabezado.
        colspan: Permite que una celda abarque múltiples columnas.
        <thead>, <tbody>, <tfoot>: Agrupan el encabezado, cuerpo y pie de la tabla respectivamente.

Etiquetas semánticas

    <header>: Define el encabezado de una página o sección.
    <nav>: Define la barra de navegación.
    <section>: Agrupa contenido que pertenece a una misma sección.
    <main>: Contenedor principal del contenido de la página.
    <aside>: Contenido secundario relacionado con el principal.
    <footer>: Define el pie de página.

Metadatos

    Metadatos: Proporcionan información sobre la página web, como su descripción o palabras clave, que no son visibles para el usuario pero son útiles para motores de búsqueda.

Accesibilidad web

    Alt (texto alternativo): Proporciona descripciones para imágenes, mejorando la accesibilidad.
    aria-label: Define una etiqueta accesible que describe el propósito de un elemento.
    role: Especifica la función de un elemento en la página (ej. role="button").

CSS
Selectores

    Clases (.): Se utilizan para aplicar estilos a un grupo de elementos.
    IDs (#): Se utilizan para aplicar estilos únicos a un elemento.

Modelo de caja

    content: Área de contenido de la caja.
    padding: Espacio entre el contenido y el borde.
    border: Borde que rodea el contenido y el padding.
    margin: Espacio fuera del borde, separa una caja de otra.
    Box-sizing:
        content-box: El tamaño de la caja solo afecta el contenido.
        border-box: El tamaño de la caja incluye el contenido, el padding y el borde, pero no el margen.

Unidades de medida

    Absolutas: cm, mm, px.
    Relativas:
        em: Relativo al tamaño de fuente del elemento padre.
        rem: Relativo al tamaño de fuente del elemento raíz (html).
        vh y vw: Relativas al 1% de la altura y el ancho de la ventana del navegador, respectivamente.
        vmin y vmax: Relativas al menor (vmin) o mayor (vmax) valor entre vh y vw.

Gradientes

    Los gradientes crean transiciones suaves entre dos o más colores.
        Ejemplo: background: linear-gradient(red, blue);.

Herencia

    Los elementos hijos heredan las propiedades de estilo de sus padres, a menos que se sobrescriban.

Cascada y especificidad

    Cascada: El orden en que se aplican los estilos importa. Las reglas más abajo en el archivo de estilo tienen mayor prioridad.
    Especificidad: Los selectores con mayor especificidad (IDs, clases) prevalecen sobre los de menor especificidad.

Pseudo-clases y pseudo-elementos

    Pseudo-clases: Aplican estilos en estados específicos de un elemento (ej. :hover).
    Pseudo-elementos: Seleccionan y estilizan partes específicas del contenido (ej. ::before, ::after).

Metodología BEM

    BEM (Bloque, Elemento, Modificador): Proporciona una convención de nombres en CSS que ayuda a la organización y la reutilización del código.

CSS avanzado
Display

    block: Convierte un elemento en bloque, ocupando todo el ancho disponible.
    inline: Convierte un elemento de bloque en línea.
    inline-block: Mezcla de block e inline.
    none: Oculta el elemento sin ocupar espacio en el diseño.

Position

    static: Posición por defecto de los elementos.
    relative: El elemento mantiene su posición en el flujo normal pero puede ser movido.
    absolute: El elemento se posiciona relativo a su contenedor más cercano con relative.
    fixed: Posiciona el elemento relativo a la ventana del navegador.
    sticky: Se comporta como relative, pero se "pega" cuando el usuario hace scroll y alcanza una posición definida.

Flexbox

    Es un modelo de caja que facilita la creación de diseños flexibles y alineados.
        display: flex: Convierte el contenedor en un flexbox.
        Propiedades del contenedor:
            flex-direction: Establece la dirección de los elementos (row, column).
            justify-content: Alinea elementos en el eje principal (center, space-between).
            align-items: Alinea elementos en el eje transversal (stretch, center).
            flex-wrap: Controla si los elementos se ajustan o no en múltiples líneas.

Transiciones

    Las transiciones suavizan los cambios de propiedades CSS cuando se activa un evento como hover.
        Ejemplo: transition: all 0.3s ease-in-out;.

Responsiveness
Media Queries

    @media: Permite aplicar estilos según las características del dispositivo (como el ancho de la pantalla).

    css

    @media (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }

Imágenes responsivas

    <picture>: Muestra diferentes versiones de una imagen dependiendo del dispositivo.
    srcset y sizes: Ofrecen versiones adaptativas de imágenes para mejorar la velocidad de carga.

Lazy loading

    Retrasa la carga de imágenes o recursos no visibles hasta que el usuario se desplaza hacia ellos.

Otros conceptos importantes
Overflow

    overflow: hidden;: Oculta el contenido que desborda el contenedor.
    overflow: scroll;: Muestra un scroll si el contenido desborda.
    overflow: auto;: Agrega scroll solo si es necesario.

Control de flujo de texto

    white-space: nowrap;: Evita que el texto haga saltos de línea.
    text-overflow: ellipsis;: Muestra puntos suspensivos cuando el texto es más largo que el ancho disponible.