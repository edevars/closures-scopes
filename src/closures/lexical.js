const buildCount = (initialValue) => {
    let count = initialValue;
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount
}

const myCounter = buildCount(5)

myCounter()
myCounter()
myCounter()
myCounter()
myCounter()

// Se crea una nueva referencia en memoria
const anotherCounter = buildCount(15)

anotherCounter()
anotherCounter()
anotherCounter()
anotherCounter()
anotherCounter()