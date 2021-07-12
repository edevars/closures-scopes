const fruits = () => {

    if(true){
        // Con var el block scope puede tener un mayo alcance a lo largo de toda la función
        var fruits1 = 'apple'

        // Estos se encuentran dentro del local scope
        let fruits2 = 'bannana'
        const fruits3 = 'kiwi'
        // console.log(fruits2)
        // console.log(fruits3)
    }

    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}

fruits()

// Example 2
let x = 1;

// Solo se ejecuta en el bloque
// Si usamos var en ambas declaraciones el alcance hace se que se sobrescriban los valores
{
    let x = 2;
    console.log(x)
}
console.log(x)

// Example 3

const anotherFunction = () => {
    // Si usamos var el scope de bloque sobrescribirá todos los valores e imprimirá después de un
    // segundo 10 veces el valor 
    for(let i=0; i <10;i++){
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    }
}

anotherFunction()