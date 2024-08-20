document.querySelector('.menu-button').addEventListener('click', function() {
    const navMenu = document.querySelector('.navigation-items');
    navMenu.classList.toggle('open');
});

function copyCode() {
    // Seleccionar el contenido del código
    const codeBlock = document.getElementById('code-block');
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        // Intentar copiar al portapapeles
        document.execCommand('copy');
        alert('Código copiado al portapapeles!');
    } catch (err) {
        alert('No se pudo copiar el código.');
    }

    // Limpiar la selección
    window.getSelection().removeAllRanges();
}
