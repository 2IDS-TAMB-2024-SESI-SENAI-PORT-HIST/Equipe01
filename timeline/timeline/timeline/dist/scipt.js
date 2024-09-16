document.addEventListener('DOMContentLoaded', function() {
    const eventIcons = document.querySelectorAll('.timeline__event__icon--clickable');
  
    eventIcons.forEach((icon, index) => {
      // Criar a caixa de texto
      const tooltipBox = document.createElement('div');
      tooltipBox.classList.add('tooltip-box');
      tooltipBox.innerText = `Texto da bola ${index + 1}`;
      document.body.appendChild(tooltipBox);
  
      // Definir o comportamento de clique
      icon.addEventListener('click', function() {
        if (tooltipBox.style.display === 'block') {
          tooltipBox.style.display = 'none';
        } else {
          const rect = icon.getBoundingClientRect();
          tooltipBox.style.left = `${rect.right + 10}px`;
          tooltipBox.style.top = `${rect.top}px`;
          tooltipBox.style.display = 'block';
        }
      });
  
      // Esconder a caixa de texto ao clicar fora
      document.addEventListener('click', function(event) {
        if (!icon.contains(event.target) && !tooltipBox.contains(event.target)) {
          tooltipBox.style.display = 'none';
        }
      });
    });
  });
  