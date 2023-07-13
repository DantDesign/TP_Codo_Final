const btnEnviar = document.getElementById('enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreCompleto = document.getElementById('nombre').value;
  const direccionEmail = document.getElementById('correo').value;
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre completo.");
    nombreCompleto.focus();
    return false;
  }

  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    direccionEmail.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    direccionEmail.focus();
    return false;
  }
  
  return true;
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btnEnviar.addEventListener('click', validate);