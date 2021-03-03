function mostrar() {
  let puntoC;
  let destino;
  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Cataratas":
      alert("Norte");
      break;
    case "Bariloche":
    case "Ushuaia":
      alert("Sur");
      break;
    case "Mar del plata":
      alert("Este");
      break;
  }
} //FIN DE LA FUNCIÓN
