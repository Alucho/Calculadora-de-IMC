
function calcular(){

  let altura = +formulario.altura.value;
  let peso = +formulario.peso.value;
  let imc = peso / (altura ** 2);
  let resultado;
  
  if(imc < 20){
    resultado = (" Abaixo do peso!");
  } 
  else if(imc >20 && imc <= 25){
    resultado = (" Peso Ideal");
  }
  else if(imc >25 && imc <= 30){
    resultado = (" Sobrepeso");
  }
  else if(imc >30 && imc <= 35){
    resultado = (" Obesidade Moderada");
  }
  else if(imc >35 && imc <= 40){
    resultado = (" Obesidade Severa");
  }
  else if(imc >40 && imc <= 50){
    resultado = (" Obesidade Morbida");
  }
  else{
   resultado = ('Falha de cálculo!');
  }

  formulario.imc.value = imc.toFixed(2) + resultado
  
}