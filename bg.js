var current = 0;
var increase = 0;
var up = true;
var inter;
var bg_b;
var bg_g;

function change()
{
    var grad;
    clearInterval(inter);

    switch(getRandomInt(6))
    {
        case 0:
            // r
            if (current == 0) { change(); break;}
            current = 0;
            grad = rainbow();
            break;
        case 1:
            // g
            if (current == 1) { change(); break;}
            current = 1;
            grad = r_red();
            break;
        case 2:
            if (current == 2) { change(); break;}
            current = 2;
            grad = weird();
            break;
        case 3:
            // rainbow
            if (current == 3) { change(); break;}
            current = 3;
            grad = r_rainbow();
            break;
        case 4:
            if (current == 4) { change(); break;}
            current = 4;
            grad = "url('weno.png')";
            break;
        case 5:
            if (current == 5) { change(); break;}
            console.log("2");
            current = 5;
            animate = true;
            StartBG();
            break;
    }

    document.getElementById("backgroundHTML").style.background = grad;
}

function r_rainbow()
{
    var grad = "linear-gradient(90deg,"
    for (var i = 0; i < 10; i++)
    {
        grad += 'rgba(' + r_colour() + ',' + r_colour() +  ',' + r_colour() + ',1)' + (i * 10) + "%,";
    }
    grad += 'rgba(' + r_colour() + ',' + r_colour() +  ',' + r_colour() + ',1)' + (i * 10) + "%";
    grad += ")";
    return grad;
}

function r_red()
{
    var b = r_colour();
    var g = r_colour();
    var r = 255;
    var grad = "linear-gradient(90deg,"
    for (var i = 0; i < 10; i++)
    {
        grad += 'rgba(' + r * (i / 10) + ',' + g +  ',' + b + ',1)' + (i * 10) + "%,";
    }
    grad += 'rgba(' + r + ',' + g +  ',' + b + ',1)' + (i * 10) + "%";
    grad += ")";
    return grad;
}

function weird()
{
    var b = r_colour();
    var g = 255;
    var r = r_colour();
    var grad = "linear-gradient(90deg,"
    for (var i = 0; i < 10; i++)
    {
        grad += 'rgba(' + r + ',' + g * (i / 10) +  ',' + r_colour() + ',1)' + (i * 10) + "%,";
    }
    grad += 'rgba(' + r + ',' + g * (i / 10) +  ',' + b + ',1)' + (i * 10) + "%";
    grad += ")";
    return grad;
}

function rainbow()
{
    return "linear-gradient(90deg,rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%)"
}

function Bg_colour_change()
{
    var grad = "linear-gradient(90deg,"
    grad += 'rgba(' + increase + ',' + bg_g +  ',' + bg_b + ',1)' + 50 + "%,";
    grad += 'rgba(' + increase * 2 + ',' + bg_g * 2 +  ',' + bg_b * 2 + ',1)' + 100 + "%";
    grad += ")";
    return grad;
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function StartBG()
{
    inter = setInterval(colourChangeBG, 100);
    bg_b = getRandomInt(255);
    bg_g = getRandomInt(255);
}

function colourChangeBG()
{
    console.log("d");
    grad = Bg_colour_change();
    if (up)
    {
        increase += 10;
        if (increase >= 255)
        {
            up = false;
        }
    }
    else
    {
        increase -= 10;
        if (increase <= 0)
        {
            up = true;
        }
    }
    document.getElementById("backgroundHTML").style.background = grad;
}