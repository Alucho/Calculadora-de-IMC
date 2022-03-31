function calcular(){

  let formulario = document.getElementById("formulario");

  let altura = +formulario.altura.value;
  let peso = +formulario.peso.value;
  let imc = peso / (altura ** 2);

  formulario.imc.value = imc.toFixed(2);

  if(imc < 20){
    alert('Abaixo do peso!');
  } 
  else if(imc >20 && imc <= 25){
    alert("Peso Ideal");
  }
  else if(imc >25 && imc <= 30){
    alert("Sobrepeso");
  }
  else if(imc >30 && imc <= 35){
    alert("Obesidade Moderada");
  }
  else if(imc >35 && imc <= 40){
    alert("Obesidade Severa");
  }
  else if(imc >40 && imc <= 50){
    alert("Obesidade Morbida");
  }
  else{
   alert('Gordo');
  }

}