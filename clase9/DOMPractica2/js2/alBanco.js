let dia = prompt("¿Que dia de la semana es?");
let hora = prompt("¿Que hora es?");
if (dia.toLowerCase() !== "domingo" && dia.toLowerCase() !== "sabado" && hora > 10 && hora < 15) {
    document.querySelector("p.respuesta").innerText = "¡Bien! Todavía estamos a tiempo de llegar";
} else {
    document.querySelector("p.respuesta").innerText = "Uf… No llegamos";
}