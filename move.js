var area;
var weno;

var w;
var h;
var x;
var y;
var x_velocity = 1;
var y_velocity = 1;

var move = true;

function validate()
{
    if (move)
    {
        window.requestAnimationFrame(update);
    }
}

function update()
{
    x += x_velocity;
    y += y_velocity;

    weno.style.left = x + "px";
    weno.style.top = y + "px";

    if (x + w >= area.clientWidth || x <= 0)
    {
        x_velocity = -x_velocity;
        weno.style.background = newColour();
        weno.style.backgroundSize = "30px 30px";
    }
    if (y + h >= area.clientHeight || y <= 0)
    {
        y_velocity = -y_velocity;
        weno.style.background = newColour();
        weno.style.backgroundSize = "30px 30px";
    }
    
   validate();
}

function initialiseMove()
{
    area = document.getElementById("screensaverbox");
    weno = document.getElementById("weno");
    w = weno.clientWidth;
    h = weno.clientHeight;
    x = Math.floor(Math.random() * (area.clientWidth - w));
    y = Math.floor(Math.random() * (area.clientHeight - h));
    validate();
}

function newColour()
{
    var temp = "rgba(" + r_colour() + "," + r_colour() + "," + r_colour() + "," + "0.4)"; 
    return "linear-gradient(" + temp + "," + temp + "), url('weno.png')";
}

function r_colour()
{
    return Math.floor(Math.random() * 255);
}
