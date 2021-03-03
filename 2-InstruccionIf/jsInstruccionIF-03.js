function mostrar()
{
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad<18){

		alert("Persona menor de edad");
	} 

	else{

		alert("Persona mayor de edad");
	}

	/*
	if(edad>18){

		alert("Persona mayor de edad");

	}

	*/

}//FIN DE LA FUNCIÓN