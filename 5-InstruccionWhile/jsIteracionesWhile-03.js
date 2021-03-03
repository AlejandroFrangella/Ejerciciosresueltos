/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
/*function mostrar()
{
	let clave = "utn750";

	while(true){

	clave = prompt("Escribir clave");			
		if(clave=="utn750"){                    
			break;								 
		}									
	}											
}//FIN DE LA FUNCIÓN
*/

function mostrar() {
  let clave;

  clave = prompt("Ingrese clave: ");

  while (clave != "utn750") {
    clave = prompt("Clave invalida. Reingrese clave");
  }

  alert("Clave correcta");
}
