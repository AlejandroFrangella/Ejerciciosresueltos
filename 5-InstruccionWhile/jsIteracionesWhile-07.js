/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let total = 0;
	let promedio;
	let numero = 0;
    let respuesta = "s";
	let contador = 0;

	//respuesta = prompt("Quiere ingresar un numero?: ");

	while( respuesta == "s" ){
		numero = parseInt(prompt("Ingrese un numero"));
		total += numero;// total = total + numero
		contador++;
		respuesta = prompt("Quiere ingresar otro numero?: ");
	}

	promedio = total / contador;

	document.getElementById("txtIdSuma").value = total;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN