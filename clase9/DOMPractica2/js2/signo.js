let num = prompt("Ingrese un numero");
if (num > 0){
    document.querySelector("p.respuesta").innerText = `El número ${num} es positivo.`
} else if (num < 0){
    document.querySelector("p.respuesta").innerText = `El número ${num} es negativo.`
}else{
    document.querySelector("p.respuesta").innerText = `El número ${num} es cero.`
}