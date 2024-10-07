window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt) {

    var alpha = evt.alpha; 
    var beta = evt.beta;  
    var gamma = evt.gamma; 

    // Update HTML elements with orientation values
    document.getElementById("a").innerHTML = "alpha = " + alpha;
    document.getElementById("b").innerHTML = "beta = " + beta;
    document.getElementById("c").innerHTML = "gamma = " + gamma;


    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#6A0888";

    var rectX = canvas.width / 2 - 25; 
    var rectY = canvas.height / 2 + beta - 25; 

    context.beginPath();
    context.fillRect(rectX, rectY, 50, 50); 
}
