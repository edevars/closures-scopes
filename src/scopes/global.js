// No usar var pues permite reasignar el valor de una variable
// en el scope global, con let y const no se puede.
var hello = 'Hello'
var hello = 'Hello++'
let world = 'Hello World'
const helloWorld = 'Hello World!'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

// Declarando una variable global
const helloWorld = () => {
    globalVar = 'I\'m global'
}

helloWorld()
console.log(globalVar)

// Declarando una variable global
const anotherFunction = () => {
    var localVar = globalVar = 'I\'m global'
}
anotherFunction()
console.log(globalVar)

// ES6 forma de declarar variables globales

hola = 'Hola'
console.log(hola)