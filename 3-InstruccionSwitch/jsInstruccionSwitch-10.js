/*

function mostrar() {
  let estacion;
  let destino;
  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      switch (destino) {
        case "Bariloche": 
          alert("Se viaja");
          break;
        default:
          alert("NO se viaja");
      }
      break;
    case "Verano":
      switch (destino) {
        case "Mar del plata":
        case "Cataratas":
          alert("Se viaja");
          break;
        default:
          alert("NO se viaja");
      }
      break;
    case "Otoño":
      switch (destino) {
        case "Bariloche":
        case "Cataratas":
        case "Mar del plata":
        case "Cordoba":
          alert("Se viaja");
          break;
      }
      break;
    case "Primavera":
      switch (destino) {
        case "Bariloche":
          alert("No se viaja");
          break;
        default:
          alert("Se viaja");
      }
      break;
  }
}//FIN DE LA FUNCIÓN
*/

function mostrar() {
  let estacion;
  let destino;
  let seViaja;
  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      switch (destino) {
        case "Bariloche": 
          seViaja = true;
          break;
        default:
          seViaja = false;
      }
      break;
    case "Verano":
      switch (destino) {
        case "Mar del plata":
        case "Cataratas":
          seViaja = true;
          break;
        default:
          seViaja = false;
      }
      break;
    case "Otoño":
      switch (destino) {
        case "Bariloche":
        case "Cataratas":
        case "Mar del plata":
        case "Cordoba":
          seViaja = true;
          break;
      }
      break;
    case "Primavera":
      switch (destino) {
        case "Bariloche":
          seViaja = false;
          break;
        default:
          seViaja = true;
      }
      break;
  }

  if(seViaja){
    alert("Se viaja");
  }
  else{
    alert("No se viaja");
  }
}//FIN DE LA FUNCIÓN