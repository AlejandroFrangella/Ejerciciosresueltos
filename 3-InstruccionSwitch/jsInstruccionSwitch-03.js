/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar() {
  let mes;
  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Febrero":
      alert("Este mes no tiene más de 29 días");
      break;
	case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
      alert("Este mes tiene 30 o más días");
      break;
	  /*
	  tambien se puede hacer
	  default: (es como un else)
		  alert("Este mes no tiene más de 29 días");
		  pero primero se saca febrero de case en el switch
		  KISS = Keep It Simple Stupid
	  */
  }
} //FIN DE LA FUNCIÓN
