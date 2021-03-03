/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	let edad, estci; 

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estci = document.getElementById("estadoCivil").value;

	if(edad<18 && !(estci=="Soltero")){

		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN


/*
PASOS:

1- declarar variable de edad
2- obtengo la edad y la convierto a numero entero
3- observo si la edad es menor a 18
4- observo si el estado civil es distinto de soltero
5- muestro el mensaje solicitado

 */