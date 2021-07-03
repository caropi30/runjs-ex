
function paquitoSwitch (operacion,num1,num2){
 switch(operacion){
   case 'suma':
     return num1+num2;
    break;
   case 'resta':
      return num1-num2;
     break;
   case 'multiplicacion':
     return num1*num2;
    break;
   case 'division':
    return num1/num2 ;
   default:
     return '¿Qué operación quieres realizar?';
 }
}

paquitoSwitch('resta',2,4);


function paquitoIf (operacion,num1,num2) {
  if ('suma') {
    return num1 + num2
  }
  else if ('resta'){
    return num1 - num2;
  }
  else if ('multiplicacion') {
    return num1*num2;
  }
  else if ('division') {
    return num1 / num2;
  }
  else {
    return '¿Qué operación quieres realizar?';
  }
};

paquitoIf('suma',2,2);
paquitoIf('resta',4,5);
paquitoIf('multiplicacion',45,78);




function paquitoSaluda(saludo,hora){
  if ('mañana' <= 8 ){
    return 'Buenos días, son las 8 AM';
  }
  else if ('tarde' == 14) {
    return 'Buenas tardes, son las 2 PM';
  }
  else if ('noche' >= 20){
    return 'Buenas noches, son las 8 PM';
  }
  else {
    return '¿Qué hora es?'
  }
};

paquitoSaluda('mañana',8);
paquitoSaluda('tarde',14);


