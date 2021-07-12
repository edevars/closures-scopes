const person = (name="name") => {
    let saveName = name
    return {
        getName: function(){
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

const myPerson = person("Enrique")

console.log(myPerson.getName())
myPerson.setName("Linda")
console.log(myPerson.getName())

// No se puede acceder al valor del nombre dentro del scope
console.log(myPerson.saveName)