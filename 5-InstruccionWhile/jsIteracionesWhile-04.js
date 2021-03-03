/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;

	num = parseInt(prompt("Ingrese numero entre 0 y 9"));

	while(!(num>=0 && num<=9)){   //o num<0 || num>9 ||isNaN(num)
		num = parseInt(prompt("Dato invalido. Ingrese numero entre 0 y 9"));

	}

	document.getElementById("txtIdNumero").value = num;
}//FIN DE LA FUNCIÓN