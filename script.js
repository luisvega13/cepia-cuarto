// Contenido de script.js

/**
 * Comprueba si el código introducido por el usuario es correcto.
 * Si es correcto, oculta el formulario de login y muestra el contenido y la navbar.
 */
function checkCode() {
    // La variable 'correctCode' la leerá desde el archivo HTML que llame a este script.
    const enteredCode = document.getElementById('access-code').value;
    const loginContainer = document.getElementById('login-container');
    const contentContainer = document.getElementById('content');
    const navbar = document.getElementById('navbar');
    const errorMessage = document.getElementById('error-message');

    if (enteredCode === correctCode) {
        // Si el código es correcto:
        loginContainer.style.display = 'none'; // Oculta el login
        contentContainer.style.display = 'block'; // Muestra el área de contenido
        navbar.style.display = 'flex'; // Muestra la navbar
        showTab('material'); // Muestra la primera pestaña por defecto
    } else {
        errorMessage.textContent = 'Código incorrecto. Inténtalo de nuevo.';
        document.getElementById('access-code').value = '';
    }
}

/**
 * Muestra la pestaña de contenido seleccionada y resalta el botón activo en la navbar.
 * @param {string} tabName - El nombre de la pestaña a mostrar (ej. 'material').
 */
function showTab(tabName) {
    // Oculta todas las pestañas de contenido
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Quita la clase 'active' de todos los botones de la navbar
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Muestra la pestaña de contenido seleccionada
    document.getElementById(tabName + '-content').classList.add('active');
    
    // Añade la clase 'active' al botón presionado
    document.getElementById('nav-' + tabName).classList.add('active');
}