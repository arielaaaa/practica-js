let day = prompt("¿Que dia es hoy?");
if (day.toLowerCase() == "domingo"){ //toLoweCase para que funcione domingo escrito con o sin mayusculas
   document.querySelector("p.respuesta").innerText = "¡Pongamos la olla, hoy se comen pastas!";
} else {
    document.querySelector("p.respuesta").innerText = "Mejor lo dejamos para el domingo";
}
