// axios.get("informacion.txt")
//     .then(response => console.log(response.data))

axios.post("https://reqres.in/api/users", {
    name: "Melisa",
    lastName: "Espínola",
    age: "24"
})
    .then(response => console.log(response)) 