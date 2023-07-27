//Crear variables con diferentes tipos de datos (number, string, array, objetos literales) para almacenar información de una persona, 
//pasar estos como parámetros de una función, que imprimirá en pantalla usando un template string con backcstick (``).
let curriculum={
    
    address: "Miraflores"
}

let fullname={
    nombre: "Jonnathan Iñaguazo"
}

let ci={
    cedula: "02546897451"
}

let skills={
    habilidad: "Eficiente"
}

let address={
    Direccion: "Eficiente"
}
let literal=[
{
    nombre: "Juan",
    age: 15
}
,
{
    nombre: "Pedro",
    age: 20

}
]



function showCurriculum(fullname,ci,skills,address){
    let Salida=`
    Hoja de Vida 
    fullname: ${fullname.nombre}
    ci: ${ci.cedula}
    skills: ${skills.habilidad}
    address: ${address.Direccion}
    
    `
    
return Salida;
}
let resultado=showCurriculum(fullname,ci,skills,address);
console.log(resultado);

