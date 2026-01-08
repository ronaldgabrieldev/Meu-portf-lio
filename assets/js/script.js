// Validação e simulação de envio do formulário de contato

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
           
            event.preventDefault();
            
            simulateFormSubmit();
        });
    }
});

function simulateFormSubmit() {
 alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
    

}