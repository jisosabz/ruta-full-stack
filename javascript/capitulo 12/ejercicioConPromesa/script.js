class Persona {
    constructor(name, instagram){
        this.name = name;
        this.instagram = instagram;
    }
};

const data = [
    ["Iván", "ivansosabz"],
    ["Jazmín", "jazmingonzalez"],
    ["Antonio","claudiososa"],
    ["Erodita"]
];

const personas = [];

for(let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0], data[i][1]);
};

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id] == undefined){
            reject("no se ha encontrado la persona");
        }else{
            resolve(personas[id]);
        }
    })
};

const obtenerInstagram = (id)=>{
    return new Promise((resolve, reject)=>{
        if(personas[id].instagram == undefined){
            reject("no se ha encontrado el instagram");
        }else{
            resolve(personas[id].instagram);
        }
    })
};

let id = 3;
obtenerPersona(id).then((persona)=>{
    console.log(persona.name);
    return obtenerInstagram(id);
}).then((instagram)=>{
    console.log(instagram)
}).catch((e)=>{
    console.log(e);
})
