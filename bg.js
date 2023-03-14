function change()
{
    var grad = "linear-gradient(90deg,"
    for (var i = 0; i < 10; i++)
    {
        grad += r_rgba() + (i * 10) + "%,";
    }
    grad += r_rgba() + (i * 10) + "%";
    grad += ")"
    document.getElementById("backgroundHTML").style.background = grad;
}

function r_rgba()
{
    return 'rgba(' + r_colour() + ',' + r_colour() +  ',' + r_colour() + ',1)';
}


