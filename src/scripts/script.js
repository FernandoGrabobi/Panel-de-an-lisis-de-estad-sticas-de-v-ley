document.addEventListener('DOMContentLoaded', () => {
    // Si estás cargando el sidebar desde otro HTML
    fetch('../partials/sidebar.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('sidebar-container').innerHTML = html;
  
        // Espera a que se inserte el HTML para agregar los event listeners
        addDropdownListeners();
      });
  });
  
  // Si el sidebar está directamente en el HTML, entonces solo llama esto al final
  function addDropdownListeners() {
    document.querySelectorAll('button[aria-controls]').forEach(button => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const dropdownContent = document.getElementById(button.getAttribute('aria-controls'));
  
        button.setAttribute('aria-expanded', !isExpanded);
        dropdownContent.classList.toggle('hidden');
        button.querySelector('svg:last-child').classList.toggle('rotate-180');
      });
    });
  }