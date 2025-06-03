document.addEventListener("DOMContentLoaded", function () {
  const texto = document.querySelector(".textoPersona");
  const boton = document.getElementById("toggleResumen");

  if (texto && boton) {
    boton.addEventListener("click", function () {
      texto.classList.toggle("expandido");
      boton.textContent = texto.classList.contains("expandido") ? "Ver menos" : "Ver más";
    });
  }
});