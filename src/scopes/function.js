const fruits = () => {
    var fruit = 'apple'
    console.log(fruit)
}

fruits()

// Example 2

const anotherFunction = () => {
    var x = '1'
    var x = '2'
    // Se pueden reasignar valores en variables dentro de un local scope
    let y = '1'
    let y = '2'
    console.log(x)
    console.log(y)
}

anotherFunction()