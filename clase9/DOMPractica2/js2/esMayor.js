let num1 = prompt("Ingrese un numero");
let num2 = prompt("ingrese otro numero");
let ans;
if (num1 > num2) {
    ans = num1
} else {
    ans = num2
}
document.querySelector("p.respuesta").innerText = `${ans} es el número mayor`;