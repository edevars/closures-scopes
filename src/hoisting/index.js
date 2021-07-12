a = 2;
var a;
console.log(a); // 2

/*
    Cuando usamos var primero se realiza la elevación (hoisiting)
    que es la declaracionde la variable 'a'. Esto pasa antes de la
    ejecución del código.
*/
a = 2;
var a;
console.log(a); // 2

// Javascript solo usa el hoisting en las declaraciones per NO
// en las inicializaciones.
console.log(a); // Undefined
var a = 2;

// El hoisting también eleva las funciones, primero lo pone en memoria

nameOfDog('Baloo')

function nameOfDog(name){
    console.log(name)
}
