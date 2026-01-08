// Validação e simulação de envio do formulário de contato

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function () {
      status.style.display = 'block';
    });
  }
});
