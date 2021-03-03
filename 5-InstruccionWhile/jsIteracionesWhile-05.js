/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
  let sexo;
  //sexo = (sexo).toLowercase(); para pasar a minuscula
  sexo = prompt("Ingrese su sexo: f o m");
  while (!(sexo == "f" || sexo == "m" || sexo == "M" || sexo == "F")) {
    // sexo!=f && sexo!=m
    sexo = prompt("Dato invalido. Ingrese su sexo: f o m"); //.toLowercase()
  }

  if (sexo == "f" || sexo == "F") {
    sexo = "Femenino";
  } else if (sexo == "m" || sexo == "M") {
    sexo = "Masculino";
  }
  document.getElementById("txtIdSexo").value = sexo;
} //FIN DE LA FUNCIÓN
