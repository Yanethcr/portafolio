//alert("Hola Mundo <3");

// se ocupa let porque var hace que las variables vivan en otros archivos

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// aqui permite que la etiqueta sea manipulada
//reconoces una accion tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
//typewriter

typewriter
  .pauseFor(2500) //milisegundos 2.5 segundos
  .typeString('Karla Yaneth Cruz Sandoval')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR ')
  .pauseFor(1000)
  .start();


let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

// aqui permite que la etiqueta sea manipulada
//reconoces una accion tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
//typewriter

typewriterFrase
  .pauseFor(2500) //milisegundos 2.5 segundos
  .typeString('"Hay algunas flores que solo ves cuando tomas desvíos."')
  .pauseFor(400)
  .deleteAll()
  .typeString('Tanaka Seako ')
  .pauseFor(1000)
  .deleteAll()
  .typeString('"Todos somos estrellas perdidas tratando de ilumnar la oscuridad"')
  .pauseFor(400)
  .deleteAll()
  .typeString('Jeon Jung Kook')
  .pauseFor(1000)
  .start();


/* let audioElement; // Variable para almacenar el objeto Audio
const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>
mainElement.addEventListener('click', function () {
  if (!audioElement) {
    audioElement = new Audio('assets/music/audio.mp3');
    audioElement.volume = 0.1;
  }
  audioElement.play();
});
const pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', function () {
  if (audioElement.paused) {
    audioElement.play();
    pauseButton.textContent = "Pausar";
  } else {
    audioElement.pause();
    pauseButton.textContent = "Reanudar";
  }
});
 */

async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}





