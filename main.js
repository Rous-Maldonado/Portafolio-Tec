// console.log("Hola Mundo! desde la cosola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr. | Programadora')
    .pauseFor(2500)
    .deleteAll()
    .typeString('You are on Your own,Kid!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();