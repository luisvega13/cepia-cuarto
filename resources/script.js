
// Contenido de script.js (solo se muestra la nueva función, añade esto al final)

// ... (código existente de checkCode y showTab) ...

/**
 * Muestra u oculta la descripción de una imagen.
 * @param {string} id - El ID del div de la descripción a alternar.
 */
function toggleDescription(id) {
    const description = document.getElementById(id);
    if (description.style.display === 'inline-table') {
        description.style.display = 'none';
    } else {
        description.style.display = 'inline-table';
    }
}