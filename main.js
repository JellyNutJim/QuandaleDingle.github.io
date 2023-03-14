var canvas;
var c;
var x;
var y;
var h = 30;
var w = 30;

const weno = new Image();

var change_x = 1;
var change_y = 1;

function Square()
{
    clearCanvas();
    c.drawImage(weno, x, y, h, w)
    x += change_x;
    y += change_y;

    if (x + w > canvas.width)
    {
        change_x = -1;
    }
    if (x < 0)
    {
        change_x = +1;
    }
    if (y < 0)
    {
        change_y = 1
    }
    if (y + h > canvas.height)
    {
        change_y = -1;
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
    x = Math.floor(Math.random() * canvas.width - w);
    y = Math.floor(Math.random() * canvas.height - h);
    window.requestAnimationFrame(Square);
}

