/**
 * Este script invalida el formulario de acceso y muestra el contenido directamente.
 * Se ejecuta automáticamente cuando la página ha cargado su contenido HTML.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Obtener los elementos que queremos manipular
    const loginContainer = document.getElementById('login-container');
    const contentContainer = document.getElementById('content');
    const navbar = document.getElementById('navbar');

    // Asegurarnos de que los elementos existen antes de modificarlos
    if (loginContainer && contentContainer && navbar) {
        // Ocultar el contenedor del login
        loginContainer.style.display = 'none';

        // Mostrar el contenedor del contenido principal
        contentContainer.style.display = 'block';

        // Mostrar la barra de navegación
        navbar.style.display = 'flex';

        // Opcional: Si quieres que una pestaña se muestre por defecto,
        // puedes llamar a la función showTab() que ya tienes en script.js
        if (typeof showTab === 'function') {
            showTab('material');
        }
    }
});