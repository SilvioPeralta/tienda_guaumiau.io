function getData(form) {
  var formdata = new FormData(form);
  var contraseña = formdata.get("contraseña");
  var valida = true;
  if (contraseña.length < 8) {
    valida = false;
    alert("La contraseña debe tener al menos 8 caracteres.");
  }
  return valida;
}

document.getElementById("Form").addEventListener("submit", function(e) {
    if (!e.target.checkValidity()) {
        e.preventDefault();
        alert("Por favor, completa todos los campos requeridos.");
        return;
    }
    // Validar contraseña
    var esValida = getData(e.target);
    if (!esValida) {
        e.preventDefault();
        return;
    }
    // Si todo es válido, el formulario se enviará
});