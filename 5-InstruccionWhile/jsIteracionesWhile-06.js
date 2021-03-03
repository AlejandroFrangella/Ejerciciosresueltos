//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar() {
 /* let numero ;
  let total = 0; // acumuldor
  let promedio ;
  let i = 0; // contador  

  while (i < 5) {
    numero = parseInt(prompt("Ingrese un numero"));
    total = total + numero;
    i++;
  }
  promedio = total / 5;

  document.getElementById("txtIdSuma").value = total;
  document.getElementById("txtIdPromedio").value = promedio;
*/

let numero ;
let total = 0; // acumuldor
let promedio ;
let i = 0; // contador  

for (i=0;i < 5;i++) {
  numero = parseInt(prompt("Ingrese un numero"));
  total = total + numero;
  
}
promedio = total / 5;

document.getElementById("txtIdSuma").value = total;
document.getElementById("txtIdPromedio").value = promedio;

} //FIN DE LA FUNCIÓN
