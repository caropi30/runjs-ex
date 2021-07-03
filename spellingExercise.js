for (let i = 0; i < 10; i++) {
  console.log(`Esta es la vuelta ${i}`)
}

let name = 'Ignacia';
let nameIteration = name.length;


function spelling(nameIteration) {
  for (let i = 0; i < nameIteration; i++) {
    console.log(`Esta es la vuelta ${i} y esta es la letra (${name[i]})que corresponde a esa vuelta`)
  }
}

spelling(nameIteration);