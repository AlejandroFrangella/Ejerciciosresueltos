/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;  //se pide espacio en memoria, declarar variable.
	
	// let nombre = "Juan"; tambien se puede declarar la variable asi.

	 // nombre = "Juan"; //inicializar la variable( darle un valor la primera vez).

	// console.log(nombre); //lo mismo que alert pero en la consola de inspeccion

	// el + concatena
	// las , es para parametros 
	// las "" es espacio, cadena vacia
	
	nombre = prompt("Ingrese su nombre"); // ventana emergenet con caja de texto

	alert(nombre);
}

