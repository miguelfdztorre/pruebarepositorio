document.addEventListener("DOMContentLoaded", function () {
  const texto = document.querySelector(".textoPersona");
  const boton = document.getElementById("toggleResumen");

 if (texto && boton) {
  boton.addEventListener("click", function () {
    texto.classList.toggle("expandido");

    if (texto.classList.contains("expandido")) {
      boton.textContent = "Ver menos";
    } else {
      boton.textContent = "Ver más";
    }
  });
}
});
