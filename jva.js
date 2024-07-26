// Menu Fixo
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
// Accordion para Produtos
document.addEventListener('DOMContentLoaded', () => {
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const heading = item.querySelector('h3');
        heading.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
// Validação do Formulário de Contato
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault(); // Impede o envio do formulário se algum campo estiver vazio
        }
    });
});
