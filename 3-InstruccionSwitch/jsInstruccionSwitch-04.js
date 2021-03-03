function mostrar() {
  let mes;
  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Febrero":
      alert("este mes tiene 28 dias");
      break;
    case "Enero":
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      alert("este mes tiene 30 dias");
      break;
    default:
    case "Marzo":
    case "Agosto":
    case "Mayo":
    case "Octubre":
    case "Julio":
    case "Diciembre":
      alert("este mes tiene 31 dias");
  }
} //FIN DE LA FUNCIÓN
