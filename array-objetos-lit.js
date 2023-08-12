//Crear un array con objetos literales, pasar a una funcion como parametro e imprimir la infomracion 
//en pantalla cada elemento del array.
//ejemplo:
//const estudiantes = [{nombre: "Juan", edad: 34},{nombre: "Luis", edad: 25}];
//Salida:
//Mi nombre es Juan y tengo 34 anios
//Mi nombre es Luis y tengo 25 anios
//Nota: Usar FOR
let array=[
    {
        nombre: "Juan",
        age: 20
    }
    ,
    {
        nombre: "Pedro",
        age: 80
    
    }
    ]
    
    
    
    function showObjets(array){
        for (let i = 0; i < array.length; i++) {
           console.log("El estudiante "+array[i].nombre+" tiene "+array[i].age+" años");
            
        }
        
    
    }
    showObjets(array);