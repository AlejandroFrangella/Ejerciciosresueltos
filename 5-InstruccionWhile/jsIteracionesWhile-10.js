/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let num; 
	let respuesta;
	let numN= 0;
	let numP=0;
	let contPares=0;
	let promedioN = 0;
	let promedioP = 0;
	let contP = 0;
	let contN = 0;
	let ceros = 0;
	let diferencia;

	do{
		num = parseInt(prompt("Ingrese un numero: "));

		while(isNaN(num)){
			num = parseInt(prompt("Esto no es un numero. Ingrese un numero: "));
		}

		if(num>0){
			contP++;
			numP+=num;
		} else if(num<0){
			contN++;
			numN+=num;
		} else if(num==0){
			ceros++;
		}

		if(num%2 == 0){
			contPares++;
		}

		respuesta = prompt("Desea ingreser otro numero?: ");
	}while(respuesta == "s");

	if(contP!=0){
	promedioP = numP / contP;
	}
	if(contN!=0){
	promedioN = numN / contN;
	}

	diferencia = contP - contN;
 
	console.log("1-Suma de los negativos: " + numN);
	console.log("2-Suma de los positivos: " + numP);
	console.log("3-Cantidad de positivos: " + contP);
	console.log("4-Cantidad de negativos: " + contN);
	console.log("5-Cantidad de ceros: " + ceros);
	console.log("6-Cantidad de números pares: " + contPares);
	console.log("7-Promedio de positivos: " + promedioP);
	console.log("8-Promedios de negativos: " + promedioN);
	console.log("9-Diferencia entre positivos y negativos, (positvos-negativos): " + diferencia);


}//FIN DE LA FUNCIÓN

// estrategias de resolucion
/*
1- declarar variables
2- generar un bucle del tipo mientras que el usuario quiero
-------------------tareas dentro del bucle-------------
3- pido numero al usuario
3.1- valido el numero
4- identificar el signo de los numeros(positivos, negativos, o cero)
4.1- si el numero es positivo(lo acumulo, lo cuento)
4.2- si el numero es negativo(lo acumulo, lo cuento)
4.3- si el numero es cero lo cuento
5- identificar si el numero es par lo cuento
5.1- si es par lo cuento
6- pregunto si se quiere ingresar otro numero
------------cierre de bucle---------------------------
7- calcular los promedios 
8- calcular la diferencia
9- 


*/
