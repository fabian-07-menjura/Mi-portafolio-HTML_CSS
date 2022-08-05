// import ncrypt from "ncrypt-js";

function habilitador() {
  if (
    nombreImput.value === "" ||
    nombreEmail.value === "" ||
    nombreAsunto.value === ""
    // nombreTarea.value === ""
  ) {
    boton.disabled = true;
    boton.style.backgroundColor = "rgb(189, 205, 236)";
  } else {
    boton.disabled = false;
    boton.style.backgroundColor = "rgb(80, 80, 184)";
  }
}

var nombreImput = document.getElementById("nombreImput");
var nombreEmail = document.getElementById("nombreEmail");
var nombreAsunto = document.getElementById("nombreAsunto");
var nombreTarea = document.getElementById("nombreTarea");

nombreImput.addEventListener("change", habilitador);
nombreEmail.addEventListener("change", habilitador);
nombreAsunto.addEventListener("change", habilitador);
nombreTarea.addEventListener("change", habilitador);

var boton = document.querySelector(".enviarFormulario");
boton.addEventListener("click", function () {
  // e.preventDefault();
  var form = document.querySelector(".formularioContacto");
  var nombre = form.nombre.value;
  var email = form.email.value;
  var asunto = form.asunto.value;
  var mensaje = form.mensaje.value;
  var boton = document.getElementById("enviar");

  console.log("soy un boton");

  if (nombre.length > 50) {
    form.nombre.value = "";
    var parrafo = document.getElementById("nombre");
    parrafo.textContent = "Debe tener maximo 50 caracteres";
    parrafo.style.color = "red";
  }
  if (nombre.length < 50) {
    var parrafo = document.getElementById("nombre");
    parrafo.textContent = "";
  }

  if (asunto.length > 50) {
    form.asunto.value = "";
    var parrafo = document.getElementById("asunto");
    parrafo.textContent = "Debe tener maximo 50 caracteres";
    parrafo.style.color = "red";
  }
  if (asunto.length < 50) {
    var parrafo = document.getElementById("asunto");
    parrafo.textContent = "";
  }

  if (mensaje.length > 300) {
    form.mensaje.value = "";
    var parrafo = document.getElementById("mensaje");
    parrafo.textContent = "Debe tener maximo 300 caracteres";
    parrafo.style.color = "red";
  }
  if (mensaje.length < 300) {
    var parrafo = document.getElementById("mensaje");
    parrafo.textContent = "";
  }
});
