function area()
{
        num1 = document.getElementById("lengthvalue").value;
 
        document.getElementById("res").innerHTML = (num1)* (num1) ;
        var1 = document.getElementById("rhombussize").value;
        var2 = document.getElementById("rhombuscolor").value;
        document.getElementById("res2").innerHTML = var1 + "  "+ var2;
}