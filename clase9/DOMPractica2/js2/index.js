let dark = confirm("¿Querés aplicar dark mode en el sitio?");
let body = document.querySelector("body");
if (dark == true) {
    body.style.background = "#444";
    body.style.color = "#fff";
    document.querySelector("p.respuesta").innerText = "Dark Mode activado";
} else {
    document.querySelector("p.respuesta").innerText = "Ok. Lo activo en otro momento";
};