// Obtén el botón "Sí" y el contenedor del ticket
const btnSi = document.getElementById('btnSi');
const ticketContainer = document.getElementById('ticketContainer');

// Cuando se haga clic en el botón "Sí"
btnSi.addEventListener('click', function() {
    // Mostrar el ticket
    ticketContainer.style.display = 'block';
});
