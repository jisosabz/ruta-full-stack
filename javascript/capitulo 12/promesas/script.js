let nombre = "pedro";
const promesa = new Promise((resolve, reject)=>{
    if(nombre!=="pedro"){
        reject("lo siento, el nombre no es pedro");
    }else{
        resolve(nombre);
    }
})
// acceder a los resultados de la promesa
promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e)
})