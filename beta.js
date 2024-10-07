window.addEventListener("deviceorientation", onDeviceOrientation);

function onDeviceOrientation(evt) {
    var alpha = evt.alpha || 0; 
    var beta = evt.beta || 0;   
    var gamma = evt.gamma || 0;  

    document.getElementById("a").innerHTML = "Alpha = " + alpha.toFixed(2);
    document.getElementById("b").innerHTML = "Beta = " + beta.toFixed(2);
    document.getElementById("c").innerHTML = "Gamma = " + gamma.toFixed(2);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var center = { x: canvas.width / 2, y: canvas.height / 2 };
    var squareSize = 50;


    context.clearRect(0, 0, canvas.width, canvas.height);
    
    
    context.fillStyle = "#6A0888";
    
 
    context.fillRect(center.x - squareSize / 2, center.y - squareSize / 2, beta, squareSize);
}
