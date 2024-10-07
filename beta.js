window.addEventListener("deviceorientation", onDeviceOrientation);

// Verifică dacă device orientation este disponibil
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(response => {
        if (response === 'granted') {
            window.addEventListener("deviceorientation", onDeviceOrientation);
        } else {
            document.getElementById("status").innerHTML = "Permisiune refuzată.";
        }
    });
} else {
    // Dacă nu este necesară permisiunea
    window.addEventListener("deviceorientation", onDeviceOrientation);
}

function onDeviceOrientation(evt) {
    var alpha = evt.alpha || 0; 
    var beta = evt.beta || 0;   
    var gamma = evt.gamma || 0;  

    // Limitează beta pentru a nu depăși 300 px în lățime
    var width = Math.max(0, Math.min(300, beta));

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
    
    // Desenează un dreptunghi în funcție de beta
    context.fillRect(center.x - width / 2, center.y - squareSize / 2, width, squareSize);
}
