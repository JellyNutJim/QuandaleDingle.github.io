var canvas;
var c;
var x;
var y;
var h = 30;
var w = 30;
var t = 0.1;

const weno = new Image();

var change_x = 1;
var change_y = 1;

function r_colour()
{
    return Math.floor(Math.random() * 255);
}


function Square()
{
    clearCanvas();
    c.globalAlpha = 1;
    c.drawImage(weno, x, y, h, w)
    c.globalAlpha = 0.2;
    c.fillRect(x, y, h, w)
    x += change_x;
    y += change_y;

    if (x + w >= canvas.width || x <= 0)
    {
        change_x = -change_x;
        c.fillStyle = 'rgb(' + r_colour() + ',' + r_colour() +  ',' + r_colour() + ')';
    }

    if (y + h >= canvas.height || y <= 0)
    {
        change_y = -change_y;
        c.fillStyle = 'rgb(' + r_colour() + ',' + r_colour() +  ',' + r_colour() + ')';
    }

    window.requestAnimationFrame(Square);
}

function clearCanvas()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function SquareLoad()
{
    weno.src = "weno.png";
    canvas = document.getElementById("tv");
    c = canvas.getContext("2d");
    x = Math.floor(Math.random() * (canvas.width - w));
    y = Math.floor(Math.random() * (canvas.height - h));
    c.fillStyle = 'rgb(' + r_colour() + ',' + r_colour() +  ',' + r_colour() + ')';

    window.requestAnimationFrame(Square);
}

