function checkCode() {
    const enteredCode = document.getElementById('access-code').value;
    const loginContainer = document.getElementById('login-container'); //Silenciado display none
    const contentContainer = document.getElementById('content'); //Silenciado display block
    const navbar = document.getElementById('navbar'); //Silenciado display flex
    const errorMessage = document.getElementById('error-message');

    if (enteredCode === correctCode) {
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
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName + '-content').classList.add('active');
    
    document.getElementById('nav-' + tabName).classList.add('active');
}

// document.addEventListener('DOMContentLoaded', () => {
//     const loginContainer = document.getElementById('login-container');
//     const contentContainer = document.getElementById('content');
//     const navbar = document.getElementById('navbar');

//     if (loginContainer && contentContainer && navbar) {
//         loginContainer.style.display = 'none';

//         contentContainer.style.display = 'block';

//         navbar.style.display = 'flex';

//         if (typeof showTab === 'function') {
//             showTab('material');
//         }
//     }
// });