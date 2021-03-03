/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	let edad;
	let estciv;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estciv = document.getElementById("estadoCivil").value;

	if(edad>=18 && estciv=="Soltero"){		
		alert("Es soltero y no es menor");
	}
		

	


}//FIN DE LA FUNCIÓN

/*
1-declarar variable de edad
2-declarar variable para asignar el estado civil
3-obtener la edad y pasarla a numero entero
4-obtener el estado civil
5-hacer funcion if de edad y estado civil
6-si no se cumple la funcion dar mensaje solicitado
*/