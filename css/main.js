/**
 * Lógica de interacción para Ábrete Sésamo Bistro
 */

// 1. Función para alternar el menú lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// 2. Cerrar el menú automáticamente al hacer clic en un enlace de navegación
document.querySelectorAll('.menu-lateral a').forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('active');
        }
    });
});

// 3. Cerrar el menú si el usuario hace clic fuera de él
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.menu-toggle');
    
    // Verificamos que los elementos existan
    if (sidebar && toggleBtn) {
        const isClickInsideMenu = sidebar.contains(event.target);
        const isClickOnButton = toggleBtn.contains(event.target);
        const isMenuOpen = sidebar.classList.contains('active');

        // Si el menú está abierto y el clic no fue ni en el menú ni en el botón de hamburguesa
        if (isMenuOpen && !isClickInsideMenu && !isClickOnButton) {
            sidebar.classList.remove('active');
        }
    }
});

// 4. Efecto de aparición suave para los platos (Opcional)
// Esto hace que los bloques negros aparezcan con un pequeño delay al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.categoria-negra, .plato, .tabla-contenedor').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});