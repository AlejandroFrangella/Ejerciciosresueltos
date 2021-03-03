/*
una agencia de viajes debe sacar las tarifas de los viajes ,
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10%
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento


*/
/* 

function mostrar() {
  let estacion;
  let destino;
  let aumento;
  let descuento;
  let precioFinal;
  let precioBase = 15000;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      switch (destino) {
        case "Bariloche":
          aumento = (precioBase * 20)/100;           //las cuentas se podrian hacere en una sola linea
		  precioFinal = precioBase + aumento;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
        case "Cataratas":
        case "Cordoba":
		  descuento = (precioBase * 10)/100;
          precioFinal = precioBase - descuento;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
        case "Mar del plata":
		  descuento = (precioBase * 20)/100;
		  precioFinal = precioBase - descuento;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
      }
      break;
    case "Verano":
      switch (destino) {
        case "Bariloche":
          descuento = (precioBase * 20)/100;
		  precioFinal = precioBase - descuento;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
        case "Cataratas":
        case "Cordoba":
		  aumento = (precioBase * 10)/100;
		  precioFinal = precioBase + aumento;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
        case "Mar del plata":
		  aumento = (precioBase * 20)/100;
		  precioFinal = precioBase + aumento;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
      }
      break;
    case "Otoño":
      switch (destino) {
        case "Cordoba":
		//o default:
		  precioFinal = 15000;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
        case "Bariloche":
        case "Cataratas":
        case "Mar del plata":
		  aumento = (precioBase * 10)/100;
		  precioFinal = precioBase + aumento;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
      }
      break;
    case "Primavera":
      switch (destino) {
        case "Cordoba":
		//o default:
		  precioFinal = 15000;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
        case "Bariloche":                    //se puede usar la condicion pero negada en este caso(!=)
        case "Cataratas":
        case "Mar del plata":
		  aumento = (precioBase * 10)/100;
		  precioFinal = precioBase + aumento;
          alert("El precio final es $ " + precioFinal.toFixed(2));
          break;
      }
      break;

  }
} //FIN DE LA FUNCIÓN

*/

/*
reacer el ejercicio pero en el switch principal  usar la variable de destino
*/
function mostrar() {
  let estacion;
  let destino;
  let precioFinal;
  let aumento;
  let descuento;
  let precioBase = 15000;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Bariloche":
      if (estacion == "Invierno") {
        aumento = (precioBase * 20) / 100;
        precioFinal = precioBase + aumento;
        alert("El precio es $ " + precioFinal);
      } else if (estacion == "Verano") {
        descuento = (precioBase * 20) / 100;
        precioFinal = precioBase - descuento;
        alert("El precio es $ " + precioFinal);
      } else if (estacion == "Otoño" || estacion == "Primavera") {  // no hace falta poner otoño y primavera ya que es un els
        aumento = (precioBase * 10) / 100;
        precioFinal = precioBase + aumento;
        alert("El precio es $ " + precioFinal);
      }
      break;
    case "Cataratas":
      if (estacion == "Invierno") {
        descuento = (precioBase * 10) / 100;
        precioFinal = precioBase - descuento;
        alert("El precio es $ " + precioFinal);
      } else if (estacion == "Verano") {
        aumento = (precioBase * 10) / 100;
        precioFinal = precioBase + aumento;
        alert("El precio es $ " + precioFinal);
      } else if (estacion == "Otoño" || estacion == "Primavera") {
        aumento = (precioBase * 10) / 100;
        precioFinal = precioBase + aumento;
        alert("El precio es $ " + precioFinal);
      }
      break;
    case "Mar del plata":
      if (estacion == "Invierno") {
        descuento = (precioBase * 20) / 100;
        precioFinal = precioBase - descuento;
        alert("El precio es $ " + precioFinal);
      } else if (estacion == "Verano") {
        aumento = (precioBase * 20) / 100;
        precioFinal = precioBase + aumento;
        alert("El precio es $ " + precioFinal);
      } else if (estacion == "Otoño" || estacion == "Primavera") {
        aumento = (precioBase * 10) / 100;
        precioFinal = precioBase + aumento;
        alert("El precio es $ " + precioFinal);
      }
      break;
    case "Cordoba":
      if (estacion == "Invierno") {
        descuento = (precioBase * 10) / 100;
        precioFinal = precioBase - descuento;
        alert("El precio es $ " + precioFinal);
      } else if (estacion == "Verano") {
        aumento = (precioBase * 10) / 100;
        precioFinal = precioBase + aumento;
        alert("El precio es $ " + precioFinal);
      } else if (estacion == "Otoño" || estacion == "Primavera") {
        precioFinal = 15000;
        alert("El precio es $ " + precioFinal);
      }
      break;
  }
}
