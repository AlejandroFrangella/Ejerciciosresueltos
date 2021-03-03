function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){
		alert("persona mayor");
	}
	else{  // como ya se que el numero NO es es mayor o igual a 18 dejo el edad >=13
		if(edad >= 13 /*&& edad <= 17*/){
			alert("persona adolescente");
		}
		else{
		//	if(edad < 13){
				alert("niño");
		//	}
		}
	}
}//FIN DE LA FUNCIÓN


/*           otra opcion de realizar los if y else(ifelseif)
if(c1)
{

}
else if(c2)
{

}
else
{

}
*/