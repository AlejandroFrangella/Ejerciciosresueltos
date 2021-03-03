/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let numero;
  let numP = 0;
  let numN = 1;
  let respuesta;
  let contNeg = 0;

  do {
    numero = parseInt(prompt("Ingrese un numero: "));

    while (isNaN(numero)) {
      numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
    }
    if (numero < 0) {
      numN *= numero;
      contNeg++;
    } else {
      numP += numero;
    }
    respuesta = prompt("Desea ingresar otro numero?: ");
  } while (respuesta == "si");
  
  if (contNeg == 0) {
    numN = 0;
  }

  document.getElementById("txtIdSuma").value = numP;
  document.getElementById("txtIdProducto").value = numN;
} //FIN DE LA FUNCIÓN
