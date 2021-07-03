let time = new Date();
let salute = time.getHours();

function paquitoSaluda(time){
  if (salute <= 3) {
    return `Buenas noches, son las ${salute} de la madrugada...aún falta por amanecer`;
  }
  else if (salute >= 4 && salute <= 11) {
    return `¡Buenos días!, son las ${salute} de la mañana... ¡Espero tengas un excelente día!`
  }
  else if (salute >=12 && salute <=18) {
    return `¡Buenas tardes son las ${salute}PM`
  }
  else if (salute >= 19 && salute <=23) {
    return `¡Buenas noches!, anocheció rápido ¿no?, ya son las ${salute}PM`
  }
}

paquitoSaluda();

