let nombre = prompt("Ingrese su nombre")
console.log(nombre)
let edad = prompt("Ingrese tu edad")
console.log(edad)
let fanDeportes = confirm("Te gustan los deportes")
console.log(fanDeportes)
alert(`Muchas gracias ${nombre} por responder nuestras preguntas`)
const usuario = {
    name:nombre,
    age:edad,
    deportistaProfesional(ans){
        if (ans == true){
           return "Si, soy fan de los deportes"
        } else {
           return "No soy tan fan aún de los deportes"
        }
    }
}
console.log(usuario.deportistaProfesional(fanDeportes))