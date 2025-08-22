const form = document.getElementById("formEmail");
const emailInput = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexEmail.test(email)) {
    mensagem.textContent = "E-mail válido! Obrigado por se inscrever 🎉";
    mensagem.className = "sucesso";
  } else {
    mensagem.textContent =
      "❌ E-mail inválido. Formato esperado: exemplo@dominio.com";
    mensagem.className = "erro";
  }
});
