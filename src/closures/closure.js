const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// Un closure recuerda el ambito en el que fue creado
const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };

  return countCoins
};

// Es una especie de clase primitiva
let crearAlcancia = moneyBox()

crearAlcancia(5);
crearAlcancia(10);
crearAlcancia(15);
