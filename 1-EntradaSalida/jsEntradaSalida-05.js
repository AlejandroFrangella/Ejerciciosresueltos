/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaracion de variables
	let nombre;
	let edad;
	
	nombre = document.getElementById("txtIdNombre").value // se lee lo escrito en lo que se escribe en la caja de texto
	
	edad = document.getElementById("txtIdEdad").value //caja de texto	
	
	// alert( " Usted se llama " + nombre + " y tiene " + edad + " años ");

	alert(`Usted se llama ${nombre} y tiene ${edad} años`);
}

