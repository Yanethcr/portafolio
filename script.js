// alert("Hola Mundo <3");

// se ocupa let porque var hace que las variables vivan en otros archivos

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});


// aqui permite que la etiqueta sea manipulada
//reconoces una accion tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
typewriter
    .pauseFor(2500)  //milisegundos 2.5 segundos
    .typeString('Karla Yaneth Cruz Sandoval')
    .pauseFor(300)
    .deleteall()
    .typeString('Desarrolladora Frontend JR')
    .pauseFor(1000)
    .start();
