let students = [
    { name: "name 1", email: "email 1", subject: "subject 1" },
    { name: "name 2", email: "email 2", subject: "subject 2" },
    { name: "name 3", email: "email 3", subject: "subject 3" },
    { name: "name 4", email: "email 4", subject: "subject 4" },
    { name: "name 5", email: "email 5", subject: "subject 5" },
    { name: "name 6", email: "email 6", subject: "subject 6" },
];

const container = document.querySelector(".container");
const confirmButton = document.querySelector(".confirm");

let htmlCode = "";

for (let student of students) {
    let { name, email, subject } = student; // Desestructuración
    htmlCode += `
        <div class="grid-item name">${name}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item subject">${subject}</div>
        <div class="grid-item week">
            <select class="chosen-week">
                <option value="week 1">week 1</option>
                <option value="week 2">week 2</option>
            </select>
        </div>
    `;
}
container.innerHTML += htmlCode; // Añadimos el código generado al container

confirmButton.addEventListener("click", () => {
    let confirmar = confirm("¿Confirmar solicitud?");
    if (confirmar) {
        // Eliminar el botón desde su elemento padre
        confirmButton.parentElement.removeChild(confirmButton);

        let weeks = document.querySelectorAll(".week");
        let chosenWeeks = document.querySelectorAll(".chosen-week");

        // Iteramos sobre los elementos y asignamos el valor del <select> al contenedor correspondiente
        weeks.forEach((week, index) => {
            let selectedValue = chosenWeeks[index].value;
            week.innerHTML = selectedValue;
        });
    }
});

