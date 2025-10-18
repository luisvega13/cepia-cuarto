document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const contentContainer = document.getElementById('content');
    const navbar = document.getElementById('navbar');

    if (loginContainer && contentContainer && navbar) {
        loginContainer.style.display = 'none';

        contentContainer.style.display = 'block';

        navbar.style.display = 'flex';

        if (typeof showTab === 'function') {
            showTab('material');
        }
    }
});