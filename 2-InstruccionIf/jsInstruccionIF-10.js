function mostrar()
{
	let min = 1;
	let max = 10;
	let num = Math.floor(Math.random () * (max - min + 1)) + min ;

	if(num == 9 || num == 10){
		alert("EXCELENTE " + num);
	}
	else{
		if(num>4){ // o tambien puedo poner num<9
			alert("APROBADO " + num);
		}
		else{
			alert("Vamos, la proxima se puede " + num);
		}
	}

}//FIN DE LA FUNCIÓN