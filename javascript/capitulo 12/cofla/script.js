/*
    Crear un sistema que almacene toda la información de las materias y las muestre de forma ordenada
*/
const materiasHtml = document.querySelector(".materias");
const materias = [
    {
        nombre: "Matemáticas",
        nota: 7
    },
    {
        nombre: "Lengua",
        nota: 8
    },
    {
        nombre: "Historia",
        nota: 9
    },
    {
        nombre: "Geografía",
        nota: 9
    },
    {
        nombre: "Física",
        nota: 6
    },
    {
        nombre: "Química",
        nota: 5
    }
];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if (materia == undefined) {
            reject("La materia no existe");
        }
        else {
            setTimeout(() => resolve(materia), Math.random() * 400);
        }
    });
}


const devolverMateria = async () => {
    let materia = [];
    for (var i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        console.log(materia[i]);
        let htmlCode = `
            <div class="materia">
                <div class="nombre">${materia[i].nombre}</div>
                <div class="nota">${materia[i].nota}</div>
            </div>
        `;
        materiasHtml.innerHTML += htmlCode;
    }
}
devolverMateria();