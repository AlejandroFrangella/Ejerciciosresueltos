/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let num;
	let numMAX =0 ;
	let numMIN =0;
	let cont = 0;
	let respuesta;
	let flag = 0;


	do{
		num = parseInt(prompt("Ingrese un numero"));

		while(isNaN(num)){
			num = parseInt(prompt("Esto no es un numero. Ingrese un numero"));
		}

		if(flag==0){
			numMIN=numMAX=num;
			flag=1;
		}
		else {
			if(num>numMAX){
				numMAX=num;
			}else if(num<numMIN){
				numMIN=num;
			}
		}

		/*
		if(flag==0||numero>max){
			max = num;
		}
		if(flag==0||numero<min){
			min = num;
			flag=1;
		}
		*/

		respuesta = prompt("Quieres ingresar otro numero?: ");
	}while(respuesta=="si");

	document.getElementById("txtIdMaximo").value = numMAX ;
	document.getElementById("txtIdMinimo").value = numMIN;


}//FIN DE LA FUNCIÓN