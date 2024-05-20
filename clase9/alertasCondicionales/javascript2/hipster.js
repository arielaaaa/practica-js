let born = prompt("Ingrese su nacionalidad")
let work = prompt("Ingrese su profesion")
let km = prompt("Ingrese cuantos km caminas por dia")
function filosofoHipster(nacionalidad, profesion, kmsRecorridos){
    if ((nacionalidad == "Argentino" || nacionalidad == "Argentina") && (profesion == "Musico" || profesion == "Musica") && (kmsRecorridos == "2km")){
        return "Soy un filósofo hipster"
    } else {
        return "Aún no soy filósofo hipster"
    } 
}
console.log(filosofoHipster(born,work,km))
