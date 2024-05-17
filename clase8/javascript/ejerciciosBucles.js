console.log("Ejercicio 1")
for (let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for");
}

for (let i = 0; i <= 10; i++) {
    console.log("La variable i tiene el valor",i);
}

for (let i = 2; i <= 20; i += 2){
    console.log("10 multiplos de 2", i);
}

for (let i = 5; i <= 250; i += 5) {
    console.log("50 multiplos de 5", i);
}

for (let i = 100; i >= 0; i--) {
    console.log("100 al 0", i);
}
console.log("Ejercicio 2")

const base = 6; // numero elegido aleatoreamente
const resultados = [];
for (let i = 1; i <= 10; i++) {
    resultados.push(base * i);
}
console.log("Tabla de multiplicar de 6:", resultados);

console.log("Ejercicio 3")
const ganancias = [904,456,-23,-554,346,23,467,-235,890,-233];
let total = 0;
for (let i = 0; i < ganancias.length; i++) {
    total += ganancias[i];
}
console.log("La suma total de las ganancias es:", total);

console.log("Ejercicio 4")
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(i+1, healingIsDifficult[i]); //si no le agregamos 1 al i cuenta desde 0
}

console.log("Ejercicio 5")
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];
for (let i = 0; i < got.length; i++) {
    console.log("Hola",got[i].nombre, got[i].apellido, "criatura viajera!");
}
for (let i = 0; i < got.length; i++) {
    console.log("Soy",got[i].nombre, got[i].apellido, "de la ciudad", got[i].ciudad);
}