//Menu  resposive hamburguesa selector
let menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  menu.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);



//validacion formulario 

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function(event) {
    const inputNombre = document.querySelector('#nombre');
    if (inputNombre.value === '') {
        event.preventDefault(); // Evitar que se envíe el formulario si el campo está vacío
        inputNombre.classList.add('input-error'); // Agregar clase de error al campo de nombre
        alert('Por favor, ingresa tu nombre.');
    } else {
        inputNombre.classList.remove('input-error'); // Remover clase de error si el campo no está vacío
    }
});


 // Animaciones de entrada de títulos de página
 document.getElementById('titulo').classList.add('titulo-entrada');
 document.getElementById('h1-contacto').classList.add('titulo-contacto-entrada');
 document.getElementById('h1-galeria').classList.add('h1-galeria-entrada');
 document.getElementById('h1-linea').classList.add('h1-linea-entrada');
 document.getElementById('h2-locaciones').classList.add('h2-locaciones-entrada');

//para desplazamiento suave
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});











  // Función para cargar scripts de forma asíncrona y diferida  esta comentada ya que tengo mi etiqueta script con asyn
//function cargarScript(url) {
   // var script = document.createElement('script');
   // script.src = url;
   // script.async = true;
   // document.body.appendChild(script);
//}



// Comprimir imágenes con lazy loading esta coentada por que mis imganes ya tiene la carga lazy
//document.addEventListener('DOMContentLoaded', function() {
  //  var lazyImages = document.querySelectorAll('img.lazy');
  //  lazyImages.forEach(function(lazyImage) {
  //      lazyImage.src = lazyImage.dataset.src;
//        lazyImage.onload = function() {
  //          lazyImage.classList.remove('lazy');
     //   };
  //  });
//});
