function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	//(pregunto si no estoy dentro del rango)
	if(!(edad>=13 && edad<=17)){      // osea que quiero que cuando esa condicion sea veradera no entre, y si es falsa si entre.
		alert("No es adolescente");
	}
/*
//  si  no  edad es mayor a 17 años --> como tiene not ("!") niego que la edad es mayor a 17 años(la condicion contraria que tendria que poner) y digo que la edad es menor a 17 años.
	if (!(edad > 17)){

		alert("persona no adolescente");

	}

	o tambien se puede hacer

	if(edad < 13 || edad > 17){

		alert("NO es adolescente");
	}
*/	

}//FIN DE LA FUNCIÓN