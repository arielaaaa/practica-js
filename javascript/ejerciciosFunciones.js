function rectangulo(height,width){
    return height * width;
}
console.log("rectangulo", rectangulo(24,278))

function triangulo(height,width) {
    return (height * width) / 2;
}
console.log("triangulo", triangulo(23,55))

function largoDelArray(array) {
    return array.length;
}
console.log("largoDelArray", largoDelArray([23,25,44,5,43,2,12,689]))

function cantidadDeLetras(word) {
    return word.length;
}
console.log("cantidadDeLetras", cantidadDeLetras("test"))

function dolarHoy(pesoPrice) {
    const exchange = 100
    return pesoPrice / exchange;
}
console.log("DolarHoy", dolarHoy(2380));

function precioFinal(price) {
    const iva = 0.21;
    return price * (1 + iva);
}
console.log("precioFinal", precioFinal(859));

function mitad(num) {
    return num / 2;
}
console.log("mitad", mitad(850));

