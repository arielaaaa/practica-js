console.log("Ejercicio 1 y 2")
const misDatos = {
    nombre: "Ariel",
    apellido: "Lehrer",
    dni: "00000000",
    comidasFavoritas: ["Helado", "Falafel", "Chocolate"],
    edad: "17",
    saludar: function() {
        console.log( "Hola mi nombre es",misDatos.nombre, misDatos.apellido, "y tengo", misDatos.edad, "mi primer comida favorita es", misDatos.comidasFavoritas[0]);
    }
};
console.log("Ejercicio 3");
const auto = {
    marca: "Tesla",
    modelo: "Model y",
    anio: 2020,
    color: "Negro",
    posicion: 0,
    avanzar: function(n) {
        auto.posicion += n;
    },
    retroceder: function(n) {
        auto.posicion -= n;
    }
};
auto.avanzar(34);
auto.retroceder(46);
auto.avanzar(50);
console.log("La posición final del auto es", auto.posicion);

const nuevoAuto = {
    marca: "Tesla",
    modelo: "Model y",
    anio: 2020,
    color: "Negro",
    posicion: 0,
    moverse: function(n) {
        nuevoAuto.posicion += n;
    }
};
nuevoAuto.moverse(74);
nuevoAuto.moverse(-60);
console.log("La posición final del nuevo auto es",nuevoAuto.posicion);



const ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(num) {
        ironMan.energia -= 10;
        return "Poder Elegido de", ironMan.nombre, ironMan.poderes[num], "energía restante: ", ironMan.energia;
    }
};

const hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num) {
        hulk.energia -= 10;
        return "Poder Elegido de", hulk.nombre, hulk.poderes[num], "energía restante: ", hulk.energia;
    }
};
console.log(ironMan.getPoder(1));
    console.log(hulk.getPoder(2));