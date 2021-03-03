/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{	
	
	let sueldo;
	let aumento;
	let resultado; //nuevoSueldo

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	aumento = sueldo * 10 / 100;

	resultado = aumento + sueldo;

	document.getElementById("txtIdResultado").value = resultado.toFixed(2); //para delimitar la cantidad de decimales


}
