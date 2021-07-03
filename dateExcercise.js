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

function saluteTimeOfDay(date) {
  if (hour <= 3) {
    return `Son las ${hour} de la Madrugada`; 
  }
  else if (hour >= 4 && hour <= 1) {
    return `Son las ${hour} de la mañana`;
  }
  else if (hour >=12 && hour <=18){
    return `Son las ${hour} de la tarde`;
  }
  else if (hour >= 19 && hour <=23){
    return `Son las ${hour} de la noche`;
  }
}

saluteTimeOfDay();

