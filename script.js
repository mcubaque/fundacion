document.addEventListener('DOMContentLoaded', () => {
    // Manejo de la navegación con desplazamiento suave
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Manejo del formulario de donación
    const form = document.getElementById('donation-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita el envío real del formulario
            alert('¡Gracias por tu donación!.');
            // Volver al inicio después del alert
            window.location.href = '#inicio';

        });
    }
});
