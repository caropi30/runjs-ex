let pizzas = ['pepperonni', 'margueritha', 'sicilian', 'boston', 'fungi', 'hawaian'];
let pizzasLength = pizzas.length;
pizzasLength

function alAzar(x) {
  return Math.floor(Math.random()*x)
}

alAzar(pizzasLength)

let pizza = pizzas[alAzar(pizzasLength)]

let pizzaLength = pizza.length;

let letraPizza = pizza + ' ' + '- '+ pizzaLength + ' ' + pizza[alAzar(pizzaLength)]
letraPizza 




















