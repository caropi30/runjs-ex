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

let date = new Date();
let day = date.getDay();
let year = date.getFullYear();
let month = date.getMonth();
let hour = date.getHours();

date;
day;
year;
month;
hour;


function today (day) {
  if (day == 0) {
    return 'Domingo'
  }
  else if (day == 1) {
    return 'Lunes'
  }    
  else if (day == 2){
    return 'Martes'
  }
  else if (day == 3){
    return 'Miércoles'
  }
  else if (day == 4){
    return 'Jueves'
  }
  else if (day == 5){
     return 'Viernes'
  }
  else if(day == 6){
     return 'Sábado'
  }
 }

today(day);

function saluteTimeOfDay (hour) {
  if (hour <= 3) {
    return 'Madrugada';
  }
  else if (hour >= 4 && hour <= 1) {
    return 'Mañana'
  }
  else if (hour >=12 && hour <=18){
    return 'Tarde'
  }
  else if (hour >= 19 && hour <=23){
    return 'Noche'
  }
}

saluteTimeOfDay(hour);

