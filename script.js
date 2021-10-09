var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

var colors = ["blue", "lavender", "red", "yellow", "green", "pink", "violet", "purple", "orange", "deeppink", "lime"];
var currentColor = 0;
        
var radiusSize = 0;
var radius = 19;

var x = 20;
var y = 20;

//códigos do teclado
var left = 37;
var up = 38;
var right = 39;
var down = 40;

function drawCircle(x, y, radius, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * Math.PI);
    brush.fill()
}

function reloadPage() {
    brush.clearRect(0, 0, 600, 400);
    brush.fillStyle = "transparent";
    brush.fillRect(0, 0, 600, 400);

    if (radius > 30) {
        radiusSize--;
    } else if (radius < 20) {
        radiusSize++;
    }
 
    drawCircle(x, y, radius, colors[currentColor]);
    radius = radius + radiusSize;
    offLimits();
}

function changeColors() {
    currentColor++;
             
    if (currentColor >= colors.length) {
        currentColor = 0;
    }
}

function keyboard(event) {
    if (event.keyCode == right) {
        x = x + 10;
    } else if (event.keyCode == left) {
        x = x - 10;
    } else if (event.keyCode == up) {
        y = y - 10;
    } else if (event.keyCode == down) {
        y = y + 10;
    }
}

function offLimits() {
    if (x <= 0 - radius) {
        x = 600 - radius;
    } else if (y <= 0 - radius) {
        y = 400 - radius;
    } else if (x >= 600 + radius) {
        x = 0 + radius;
    } else if (y >= 400 + radius) {
       y = 0 + radius; 
    }
}

document.onkeydown = keyboard;

setInterval(reloadPage, 20);

setInterval(changeColors, 550);