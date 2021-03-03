/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()                                                       // cuando al funcion se termino de ejecutar
{	                                                                   //se devuelven todos los datos, se libera espacio
	let num1, num2;                                                    //( ciclo de vida de la funcion)
	let resultado;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 + num2;

	alert(" La suma es " + resultado);
}

function restar()
{

	let num1, num2;
	let resultado;

	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 - num2;

	alert(" La resta es " + resultado);
}

function multiplicar()
{ 
	let num1, num2;
	let multi;


	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	multi = num1 * num2;

	alert(" La multiplicacion es " + multi);
	
}

function dividir()
{
	let num1, num2;
	let divi;


	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	divi = num1 / num2;

	alert(" La division es " + divi);
	
}

