window.addEventListener("deviceorientation", onDeviceOrientation);

function onDeviceOrientation(evt) {
    var alpha = evt.alpha || 0; 
    var beta = evt.beta || 0;   
    var gamma = evt.gamma || 0;  

    // Afișează valorile alpha, beta, și gamma
    document.getElementById("a").innerHTML = "Alpha = " + alpha.toFixed(2);
    document.getElementById("b").innerHTML = "Beta = " + beta.toFixed(2);
    document.getElementById("c").innerHTML = "Gamma = " + gamma.toFixed(2);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // Setează dimensiunile canvas-ului
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var center = { x: canvas.width / 2, y: canvas.height / 2 };
    var squareSize = 50;

    // Curăță canvas-ul
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Setează culoarea pentru dreptunghi
    context.fillStyle = "#6A0888";

    // Limitează valoarea lui beta pentru a face dreptunghiul vizibil
    var width = Math.max(0, Math.min(300, beta)); // Limitează lățimea între 0 și 300 px

    // Desenează dreptunghiul la centrul canvas-ului
    context.fillRect(center.x - width / 2, center.y - squareSize / 2, width, squareSize);
}
