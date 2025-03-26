// fetch("https://reqres.in/api/unknown/2")
//     // devulve un promesa desencapsulada
//     // .then((respuesta) => respuesta.text())
//     // devulve un json
//     .then((respuesta) => respuesta.json())
//     .then((respuesta) => console.log(respuesta));
// ahora hacemos una peticiónm post
fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
        name: "morpheus",
        job: "leader"
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
    .then((respuesta) => respuesta.json())
    .then((respuesta) => console.log(respuesta));
