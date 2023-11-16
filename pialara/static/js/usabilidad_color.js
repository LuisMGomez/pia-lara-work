// Función para cambiar el esquema de color
function changeColorScheme(scheme) {
    //console.log('Cambiando esquema de color a:', scheme);
    const colorClasses = ['contrast-default', 'contrast-1', 'contrast-2', 'contrast-3'];
    
    // Elimina las clases de esquema de color existentes
    colorClasses.forEach(colorClass => {
      document.body.classList.remove(colorClass);
    });

    // Añade la nueva clase de esquema de color
    document.body.classList.add(scheme);

    // Guarda en localStorage el esquema de colores elegidos
    localStorage.setItem('preferredColorScheme', scheme);
  }
  
 
  document.querySelectorAll('.color-scheme-control').forEach(button => {
    button.addEventListener('click', function() {
      changeColorScheme(this.dataset.scheme);
    });
  });
  

  