alert("Bienvenidos a mi sitio.");
let keepGoing = confirm("¿Está seguro de querer avanzar?");
if (keepGoing == false) {
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita";
} else {
    document.querySelector(".saludo").innerHTML = "Qué alegría que quieras continuar tu visita";
    let name = prompt("Ingrese tu nombre");
    document.querySelector("h1").innerHTML = `Bienvenido ${name}`
    let age = prompt("¿Cuántos años tenés?");
    if (age < 17) { //no se si incluir 17 o no, en este caso con 17 te deja continuar
        let general = document.querySelector(".container-general");
        general.style.display = "none";
        let newGeneral = document.querySelector("#accesoDenegado");
        newGeneral.style.display = "block";
    } else {
        let programacion = confirm("¿Te gusta la programación?");
        let back = document.querySelector(".background-img");
        if (programacion == false) {
            back.style.backgroundImage = "url('./img/gatito.jpeg')"; 
        } else {
            back.style.backgroundImage = "url('./img/programmer.jpeg')"; 
        };
        let img2 = document.querySelector("img.avatar");
        let route = prompt("Ruta de imagen");
        img2.src = route;
        const pelicula = {
            nombre: prompt("nombre de pelicula favorita"),
            director: prompt("nombre del director"),
            duracion: prompt("Duracion"),
            actor: prompt("actor"),
        }
        document.querySelector("#nombre").innerText = pelicula.nombre;
        document.querySelector("#director").innerText = pelicula.director;
        document.querySelector("#duracion").innerText = pelicula.duracion;
        document.querySelector("#actor").innerText = pelicula.actor;
        let unblock = document.querySelector("div#pelicula");
        unblock.style.display = "block";
    }
}
